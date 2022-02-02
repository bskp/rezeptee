import {useFind, useSubscribe} from "meteor/react-meteor-data";
import {Rezept, Rezepte} from "/imports/api/models";
import {useParams} from "react-router-dom";
import React, {TouchEventHandler, useEffect, useRef, useState} from "react";
import {Sidebar} from "/imports/ui/Sidebar";

type ContentWrapperProps = {
  children: React.FunctionComponentElement<{ rezept: Rezept }>
  rezeptProvider?: Function
  slug?: string
};

export function ContentWrapper(props: ContentWrapperProps) {
  const isLoading = useSubscribe('rezepte');
  const ref = useRef(null)
  const rezepte: Rezept[] = useFind(() => Rezepte.find({}, {sort: {name: 1}}));
  let slug = props.slug || useParams().rezept;

  // Detect content change
  const previousSlug = usePrevious(slug);
  if (previousSlug != slug) {
    if (ref.current !== null) { // @ts-ignore
      ref.current.scrollTop = 0;
    }
  }

  let [sidebarCollapse, setSidebarCollapse] = useState(true);
  let content, rezept

  if (isLoading()) {
    content = <h1>lade...</h1>;
  } else {
    rezept = (props.rezeptProvider && props.rezeptProvider()) || Rezepte.findOne({slug: slug})
    const nA = <h1>{slug} wurde leider nicht gefunden.</h1>;
    content = rezept ? React.cloneElement(props.children, {rezept: rezept}) : nA
  }

  let handleSidebarToggle = () => {
    setSidebarCollapse(current => !current);
  }

  let [start, setStart] = useState({x: 0, y: 0});
  let [swipe, setSwipe] = useState({x: 0, y: 0});
  let [offsetTransform, setOffsetTransform] = useState("");

  const touchStartHandler : TouchEventHandler = event => {
    const t = event.touches[0]
    setStart({x: t.pageX, y: t.pageY})
    setOffsetTransform(window.getComputedStyle(ref.current).transform)
    ref.current.style.transition = "0s" // disable animation
  };

  const touchMoveHandler : TouchEventHandler = event => {
    let dX = event.touches[0].pageX - start.x
    let dY = event.touches[0].pageY - start.y

    // Check swipe angle (<45°) and dead zone
    const deadZone = 10;
    if (Math.abs(dY) > Math.abs(dX) || Math.abs(dX) < deadZone) {
      dX = 0
    } else {
      dX = dX - Math.sign(dX)*deadZone
    }

    // restrict swiping direction
    if (sidebarCollapse) {
      if (dX > 0) dX = 0;
    } else {
      if (dX < 0) dX = 0;
    }

    // @ts-ignore
    ref.current.style.transform = offsetTransform + " translateX(" + dX + "px)"
    setSwipe({x: dX, y: dY})
  };

  let baseTransform = sidebarCollapse ? "translateX(0)" : ""

  const touchEndHandler : TouchEventHandler = event => {
    // @ts-ignore
    const minDistance = 10;
    if (Math.abs(swipe.x) > minDistance) setSidebarCollapse(!sidebarCollapse)
    setSwipe({x: 0, y: 0})
    ref.current.style.transition = "0.5s";
    ref.current.style.transform = baseTransform;
  };


  return <div className={'contentwrapper ' + (sidebarCollapse ? '' : 'offset')}
              onTouchStart={touchStartHandler}
              onTouchMove={touchMoveHandler}
              onTouchEnd={touchEndHandler}>

    <section id="content" ref={ref} style={{transform: baseTransform}}>
      {content}
    </section>
    <Sidebar rezept={rezept} rezepte={rezepte} toggler={() => setSidebarCollapse(true)}/>
    <div onClick={handleSidebarToggle} id="mode_flip"></div>
  </div>
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
