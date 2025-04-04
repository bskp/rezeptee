// @ts-ignore
import {useSubscribe} from "meteor/react-meteor-data";
import React, {createContext, TouchEventHandler, useRef, useState} from "react";
import {Sidebar} from "/imports/ui/Sidebar";
import {Outlet} from "react-router-dom";
import {RezeptContext} from "./RezeptResolver";
import {RezeptParsed} from "/imports/api/models/rezept";

type ContentWrapperProps = {
  allowSwipe: boolean;
};

export const DataLoadingContext = createContext<boolean>(false);

export const getSubdomain = () => {
  const chunks = window.location.hostname.split('.');
  if (chunks.length == 3 && chunks[1] == 'rezept' && chunks[2] == 'ee') return chunks[0];
  if (chunks.length == 2 && chunks[1] == 'localhost') return chunks[0];
  return null;
}

export const ContentWrapper = (props: ContentWrapperProps) => {
  const isLoading = () => {
    const rezepteLoading = useSubscribe('rezepte', getSubdomain());
    const statsLoading = useSubscribe('spacesStats');
    return rezepteLoading() || statsLoading();
  }

  const ref = useRef<HTMLDivElement>(null)
  let [sidebarCollapse, setSidebarCollapse] = useState(true);

  let handleSidebarToggle = () => {
    setSidebarCollapse(current => !current);
  }

  let [start, setStart] = useState({x: 0, y: 0});
  let [swipe, setSwipe] = useState({x: 0, y: 0});
  let [offsetTransform, setOffsetTransform] = useState("");

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
    let dY = event.touches[0].pageY - start.y

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

  const [rezept, setRezept] = useState<RezeptParsed>({} as RezeptParsed);
  const setRezeptWithEffect: React.Dispatch<RezeptParsed> = (current ) => {
    setRezept(previous => {
      if (previous.slug !== current.slug) {
        if (ref.current != null) {
          ref.current.scrollTop = 0;
        }
      }
      return current;
    });
  };

  return <RezeptContext.Provider value={{rezept, handleRezeptUpdate: setRezeptWithEffect}}>
    <DataLoadingContext.Provider value={isLoading()}>

      <div className={'contentwrapper ' + (sidebarCollapse ? '' : 'offset')}
           onTouchStart={touchStartHandler}
           onTouchMove={touchMoveHandler}
           onTouchEnd={touchEndHandler}>

        <section id="content" ref={ref} style={{transform: baseTransform}}>
          <Outlet/>
        </section>
        <Sidebar toggler={() => setSidebarCollapse(true)}/>
        <div onClick={handleSidebarToggle} id="mode_flip"></div>
      </div>
    </DataLoadingContext.Provider>
  </RezeptContext.Provider>
};
