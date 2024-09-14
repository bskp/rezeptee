import React, {useEffect} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ContentWrapper} from "/imports/ui/ContentWrapper";
import {Editor, EditorCreate} from "/imports/ui/Editor";
import {Viewer} from "/imports/ui/Viewer";
import {attachTouchHandlers} from "/imports/ui/preventBodyBounce";
import {Changes} from "/imports/ui/Changes";

export const App = () => {
  useEffect(() => {
    attachTouchHandlers()
  })

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route element={<ContentWrapper allowSwipe={true}/>}>
        <Route path='/' element={<Viewer/>}/>
        <Route path=':slug' element={<Viewer/>}/>
        <Route path='create' element={<EditorCreate/>}/>
        <Route path='changes' element={<Changes/>}/>
      </Route>
      <Route element={<ContentWrapper allowSwipe={false}/>}>
        <Route path=':slug/edit' element={<Editor/>}/>
      </Route>
    </>
  ));

  return <RouterProvider router={router}/>;
}
