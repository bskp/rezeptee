// @ts-ignore
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import React, {FunctionComponent, useEffect} from 'react';
import {Rezept, Rezepte} from "../api/models";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ContentWrapper} from "/imports/ui/ContentWrapper";
import {Editor, getTemplateRecipe} from "/imports/ui/Editor";
import {Viewer} from "/imports/ui/Viewer";
import {attachTouchHandlers} from "/imports/ui/preventBodyBounce";
import {Changes} from "/imports/ui/Changes";

type ContentProps = {
  rezept: Rezept | string
}

export type Content = FunctionComponent<ContentProps>;

export const App = () => {
  const isLoading = useSubscribe('rezepte');
  const rezepte: Rezept[] = useFind(() => Rezepte.find({}, {sort: {name: 1}}));

  useEffect(() => {
    attachTouchHandlers()
  })

  const getBySlug = (slug: string): Rezept | string => {
    if (isLoading()) {
      return 'lade...';
    } else {
      return Rezepte.findOne({slug: slug}) ?? `${slug} wurde leider nicht gefunden.`
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ContentWrapper>
            <Viewer rezept={getBySlug('rezeptee')}/>
          </ContentWrapper>
        }/>
        <Route path='/create' element={
          <ContentWrapper>
            <Editor rezept={getTemplateRecipe()}/>
          </ContentWrapper>
        }/>
        <Route path='/changes' element={
          <ContentWrapper>
            <Changes/>
          </ContentWrapper>
        }/>
        <Route path='/:rezept' render={() => <div>Home</div>}/>
        <Route path='/changes' element={
          <ContentWrapper>
            <Viewer rezept={getBySlug('amaretti')}/>
          </ContentWrapper>
        }/>
        <Route path='/:rezept/edit' render={(props) =>
          <ContentWrapper>
            <Editor rezept={getBySlug(props.match)}/>
          </ContentWrapper>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

