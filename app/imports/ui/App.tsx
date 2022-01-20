import React, {FunctionComponent} from 'react';
import {Rezept} from "../api/models";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ContentWrapper} from "/imports/ui/ContentWrapper";
import {Editor, getTemplateRecipe} from "/imports/ui/Editor";
import {Viewer} from "/imports/ui/Viewer";


type ContentProps = {
  rezept: Rezept
}

export type Content = FunctionComponent<ContentProps>;

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
          <ContentWrapper rezeptProvider={getTemplateRecipe}>
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

