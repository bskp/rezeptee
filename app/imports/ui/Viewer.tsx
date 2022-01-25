import {useNavigate} from "react-router-dom";
import {renderMdast} from 'mdast-react-render';
import schema from "/imports/ui/recipe-schema";
import React, {TouchEventHandler, useState} from "react";
import DocumentTitle from "react-document-title"
import {Content} from "/imports/ui/App";

export const Viewer: Content = ({rezept}) => {
  let navigate = useNavigate();

  const clickHandler = event => {
    navigate(`/${rezept.slug}/edit`)
    event.preventDefault();
  }

  if (!rezept.hasOwnProperty('mdast')) {
    rezept._parse()
  }
  const vdom = renderMdast(rezept.mdast, schema);

  return (<>
    <DocumentTitle title={rezept.name}/>
    <div className="page" onContextMenu={clickHandler}>{vdom}</div>
  </>);
}
