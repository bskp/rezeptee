import React, {FunctionComponent} from 'react';
import {Rezept} from "../api/models";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import DocumentTitle from "react-document-title";
import schema from "./recipe-schema"
import {renderMdast} from "mdast-react-render";
import {ContentWrapper} from "/imports/ui/ContentWrapper";
import {Editor, template} from "/imports/ui/Editor";


type ContentProps = {
  rezept: Rezept
}

export type Content = FunctionComponent<ContentProps>;

function Hello() {
  return <h1>Hallo!</h1>
}

const Viewer: Content = ({rezept}) => {
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

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ContentWrapper slug="rezeptee">
            <Viewer/>
          </ContentWrapper>
        }/>
        <Route path='/create' element={
          <ContentWrapper rezept={template}>
            <Editor/>
          </ContentWrapper>
        }/>
        <Route path='/:rezept' element={
          <ContentWrapper>
            <Viewer/>
          </ContentWrapper>
        }/>
        <Route path='/:rezept/edit' element={
          <ContentWrapper>
            <Editor/>
          </ContentWrapper>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

