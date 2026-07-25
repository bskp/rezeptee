// @ts-ignore
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import React, {TouchEventHandler, useEffect, useRef, useState} from "react";
import {Sidebar} from "/imports/ui/Sidebar";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {RezeptContext} from "./RezeptContext";
import {ErrorBoundary} from "./ErrorBoundary";
import {parse, Rezepte, RezeptParsed, RezeptStored} from "/imports/api/models/rezept";

type ContentWrapperProps = {
  allowSwipe: boolean;
};

export const getSubdomain = () => {
  const chunks = window.location.hostname.split('.');
  if (chunks.length == 3 && chunks[1] == 'rezept' && chunks[2] == 'ee') return chunks[0];
  if (chunks.length == 2 && chunks[1] == 'localhost') return chunks[0];
  return null;
}

export const ContentWrapper = (props: ContentWrapperProps) => {
  const rezepteLoading = useSubscribe('rezepte', getSubdomain());
  useSubscribe('spaces');

  const ref = useRef<HTMLDivElement>(null)
  const [sidebarCollapse, setSidebarCollapse] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarCollapse(current => !current);
  }

  const [start, setStart] = useState({x: 0, y: 0});
  const [swipe, setSwipe] = useState({x: 0, y: 0});
  const [offsetTransform, setOffsetTransform] = useState("");

  const touchStartHandler: TouchEventHandler = event => {
    if (!props.allowSwipe) return;
    if (!ref.current) return
    const t = event.touches[0]
    setStart({x: t.pageX, y: t.pageY})
    setOffsetTransform(window.getComputedStyle(ref.current).transform)
    ref.current.style.transition = "0s" // disable animation
  };

  const touchMoveHandler: TouchEventHandler = event => {
    if (!props.allowSwipe) return;
    let dX = event.touches[0].pageX - start.x
    const dY = event.touches[0].pageY - start.y

    // Check swipe angle (<45°) and dead zone
    const deadZone = 10;
    if (Math.abs(dY) > Math.abs(dX) || Math.abs(dX) < deadZone) {
      dX = 0
    } else {
      dX = dX - Math.sign(dX) * deadZone
    }

    // restrict swiping direction
    if (sidebarCollapse) {
      if (dX > 0) dX = 0;
    } else {
      if (dX < 0) dX = 0;
    }

    if (ref.current) {
      ref.current.style.transform = offsetTransform + " translateX(" + dX + "px)"
    }
    setSwipe({x: dX, y: dY})
  };

  const baseTransform = sidebarCollapse ? "translateX(0)" : ""

  const touchEndHandler: TouchEventHandler = () => {
    if (!props.allowSwipe) return;
    if (!ref.current) return
    const minDistance = 10;
    if (Math.abs(swipe.x) > minDistance) {
      setSidebarCollapse(!sidebarCollapse)
    }
    setSwipe({x: 0, y: 0})
    ref.current.style.transition = "0.5s";
    ref.current.style.transform = baseTransform;
  };

  const [rezept, setRezept] = useState<RezeptParsed | undefined>(undefined);
  const setRezeptWithEffect: React.Dispatch<RezeptParsed> = (current) => {
    setRezept(previous => {
      if (previous?.slug !== current.slug) {
        if (ref.current != null) {
          ref.current.scrollTop = 0;
        }
      }
      return current;
    });
  };

  const params = useParams();
  const location = useLocation();
  const slug = params.slug ?? 'rezeptee';
  const rezeptStored = useFind(() => Rezepte.find({slug: slug, active: true}), [slug])[0];

  useEffect(() => {
    if (rezepteLoading()) {
      setRezept(parse({markdown: `${params.slug ?? 'rezept.ee'}\n======\n\n`} as RezeptStored));
      return;
    }
    if (rezeptStored === undefined) {
      setRezept(undefined);
      return;
    }
    const rezept = parse(rezeptStored)
    setRezeptWithEffect(rezept);
  }, [rezeptStored, rezepteLoading()]);

  return <RezeptContext.Provider value={rezept}>
    <div className={'contentwrapper ' + (sidebarCollapse ? '' : 'offset')}
         onTouchStart={touchStartHandler}
         onTouchMove={touchMoveHandler}
         onTouchEnd={touchEndHandler}>

      <section id="content" ref={ref} style={{transform: baseTransform}}>
        <ErrorBoundary key={location.pathname} fallback={error => <div className="page">
          <h1>Da ging etwas schief.</h1>
          <p>
            Dieses Rezept konnte nicht dargestellt werden — vermutlich stolpert
            der Renderer über eine Stelle im Markdown.
            Du kannst es <Link to={`/${slug}/edit`}>im Editor öffnen</Link> und
            die Änderung zurücknehmen.
          </p>
          <pre>{error.message}</pre>
        </div>}>
          <Outlet/>
        </ErrorBoundary>
      </section>
      <Sidebar toggler={() => setSidebarCollapse(true)}/>
      <div onClick={handleSidebarToggle} id="mode_flip"></div>
    </div>
  </RezeptContext.Provider>
};
