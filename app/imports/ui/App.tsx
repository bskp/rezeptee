// @ts-ignore
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import React, {FunctionComponent, useEffect} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ContentWrapper} from "/imports/ui/ContentWrapper";
import {Editor, EditorCreate} from "/imports/ui/Editor";
import {Viewer} from "/imports/ui/Viewer";
import {attachTouchHandlers} from "/imports/ui/preventBodyBounce";
import {Changes} from "/imports/ui/Changes";
import {Rezept} from "/imports/api/models/rezept";

type ContentProps = {
  rezept: Rezept | string
}

export const App = () => {
  useEffect(() => {
    attachTouchHandlers()
  })

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<ContentWrapper/>}>
      <Route path='/' element={<Viewer/>}/>
      <Route path=':slug' element={<Viewer/>}/>
      <Route path=':slug/edit' element={<Editor/>}/>
      <Route path='create' element={<EditorCreate/>}/>
      <Route path='changes' element={<Changes/>}/>
    </Route>
  ));

  return <RouterProvider router={router}/>;
}
