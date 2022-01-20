import {useFind, useSubscribe} from "meteor/react-meteor-data";
import {Rezept, Rezepte} from "/imports/api/models";
import {useParams} from "react-router-dom";
import React, {useState} from "react";
import {Sidebar} from "/imports/ui/Sidebar";

type ContentWrapperProps = {
  children: React.FunctionComponentElement<{ rezept: Rezept }>
  rezeptProvider?: Function
  slug?: string
};

export function ContentWrapper(props: ContentWrapperProps) {
  const isLoading = useSubscribe('rezepte');
  const rezepte: Rezept[] = useFind(() => Rezepte.find({}, {sort: {name: 1}}));
  let slug = props.slug || useParams().rezept;

  let [sidebarCollapse, setSidebarCollapse] = useState(true);
  let content, rezept

  if (isLoading()) {
    content = <h1>lade...</h1>;
  } else {
    rezept = (props.rezeptProvider && props.rezeptProvider()) || Rezepte.findOne({slug: slug})
    const nA = <h1>{slug} wurde leider nicht gefunden.</h1>;
    content = rezept ? React.cloneElement(props.children, {rezept: rezept}) : nA
  }

  let handleSidebarToggle: React.MouseEventHandler = event => {
    setSidebarCollapse(current => !current);
  }

  return <div className={'contentwrapper ' + (sidebarCollapse ? '' : 'offset')}>
    <section id="content">
      {content}
    </section>
    <Sidebar rezept={rezept} rezepte={rezepte} toggler={() => setSidebarCollapse(true)}/>
    <div onClick={handleSidebarToggle} id="mode_flip"></div>
  </div>
}
