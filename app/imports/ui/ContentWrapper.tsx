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
  let [swipe, setSwipe] = useState(0);
  let [trans, setTrans] = useState('');

  const touchStartHandler : TouchEventHandler = event => {
    const t = event.touches[0]
    setStart({x: t.pageX, y: t.pageY});
    setTrans(ref.current.style.transition);
    ref.current.style.transition = 'transform 0s';
  };

  const touchMoveHandler : TouchEventHandler = event => {
    let dX = event.touches[0].pageX - start.x
    let dY = event.touches[0].pageY - start.y
    console.log(dX)
    setSwipe(dX)

    // require minimum swipe distance and angle
    if (Math.abs(dX) < 20 || Math.abs(dY) > Math.abs(dX)) {
      dX = 0
    }

    // @ts-ignore
    ref.current.style.transform = "translateX(" + dX + "px)"
  };

  const finalizeSwipe = () => {
    ref.current.style.transition = trans;
    ref.current.style.transform = 'translateX(0)'
  }

  const touchEndHandler : TouchEventHandler = event => {
    // @ts-ignore
    const minDistance = 30;
    if (swipe < -minDistance) setSidebarCollapse(false)
    if (swipe > minDistance) setSidebarCollapse(true)
    finalizeSwipe()
  };


  return <div className={'contentwrapper ' + (sidebarCollapse ? '' : 'offset')}
              onTouchStart={touchStartHandler}
              onTouchMove={touchMoveHandler}
              onTouchEnd={touchEndHandler}>

    <section ref={ref} id="content">
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

function clipValue(value: number, lower: number, upper: number) {
  value = value > upper ? upper : value;
  value = value < lower ? lower : value;
  return value
}
