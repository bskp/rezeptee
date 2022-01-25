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

  const sidebar = 18*18;
  let base = sidebarCollapse ? 0 : -sidebar

  let [start, setStart] = useState(0);
  let [swipe, setSwipe] = useState(0);
  const touchStartHandler : TouchEventHandler = event => {
    const pageX = event.touches[0].pageX;
    setStart(pageX);
    ref.current.style.transition = "";
  };

  const touchMoveHandler : TouchEventHandler = event => {
    let swipe = event.touches[0].pageX - start
    console.log(swipe)
    setSwipe(swipe)
    swipe += base
    swipe = swipe > 0 ? 0 : swipe;
    swipe = swipe < -sidebar ? - sidebar : swipe;
    // @ts-ignore
    ref.current.style.transform = "translateX(" + swipe + "px)"
  };

  const touchEndHandler : TouchEventHandler = event => {
    // @ts-ignore
    const minDistance = 30;
    if (swipe < -minDistance) setSidebarCollapse(false)
    if (swipe > minDistance) setSidebarCollapse(true)
    ref.current.style.transition = "0.5s";
    ref.current.style.transform = `translateX(${base}px)`
  };


  return <div className={'contentwrapper ' + (sidebarCollapse ? '' : 'offset')}
              onTouchStart={touchStartHandler}
              onTouchMove={touchMoveHandler}
              onTouchEnd={touchEndHandler}>

    <section id="content" ref={ref} style={{transform: `translateX(${base}px)`}}>
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
