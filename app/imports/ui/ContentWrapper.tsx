// @ts-ignore
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import React, {createContext, TouchEventHandler, useEffect, useRef, useState} from "react";
import {Sidebar} from "/imports/ui/Sidebar";
import {Outlet} from "react-router-dom";
import { RezeptContext } from "./RezeptResolver";
import {Rezept} from "/imports/api/models/rezept";

type ContentWrapperProps = {
  rezeptProvider?: Function
  slug?: string
};

export function ContentWrapper(props: ContentWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  let [sidebarCollapse, setSidebarCollapse] = useState(true);

  let handleSidebarToggle = () => {
    setSidebarCollapse(current => !current);
  }

  let [start, setStart] = useState({x: 0, y: 0});
  let [swipe, setSwipe] = useState({x: 0, y: 0});
  let [offsetTransform, setOffsetTransform] = useState("");

  const touchStartHandler : TouchEventHandler = event => {
    if (!ref.current) return
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

  const touchEndHandler : TouchEventHandler = () => {
    if (!ref.current) return
    const minDistance = 10;
    if (Math.abs(swipe.x) > minDistance) {
      setSidebarCollapse(!sidebarCollapse)
    }
    setSwipe({x: 0, y: 0})
    ref.current.style.transition = "0.5s";
    ref.current.style.transform = baseTransform;
  };

  const [rezept, setRezept] = useState<Rezept>({} as Rezept);
  return <RezeptContext.Provider value={{rezept, setRezept}}>
  <div className={'contentwrapper ' + (sidebarCollapse ? '' : 'offset')}
              onTouchStart={touchStartHandler}
              onTouchMove={touchMoveHandler}
              onTouchEnd={touchEndHandler}>

    <section id="content" ref={ref} style={{transform: baseTransform}}>
      <Outlet />
    </section>
    <Sidebar toggler={() => setSidebarCollapse(true)}/>
    <div onClick={handleSidebarToggle} id="mode_flip"></div>
  </div>
  </RezeptContext.Provider>
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
