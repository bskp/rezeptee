import React, {useEffect} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ContentWrapper} from "/imports/ui/ContentWrapper";
import {Editor} from "/imports/ui/Editor";
import {Viewer} from "/imports/ui/Viewer";
import {attachTouchHandlers} from "/imports/ui/preventBodyBounce";
import {Changes} from "/imports/ui/Changes";
import {History} from "/imports/ui/History";

export const App = () => {
  useEffect(() => {
    attachTouchHandlers()
  })

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route element={<ContentWrapper allowSwipe={true}/>}>
        <Route path='/' element={<Viewer/>}/>
        <Route path=':slug' element={<Viewer/>}/>
        <Route path='changes' element={<Changes/>}/>
      </Route>
      <Route element={<ContentWrapper allowSwipe={false}/>}>
        <Route path='create' element={<Editor/>}/>
        <Route path=':slug/edit' element={<Editor/>}/>
        <Route path=':slug/history' element={<History/>}/>
      </Route>
    </>
  ));

  return <RouterProvider router={router}/>;
}
