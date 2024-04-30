import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createInstance, MatomoProvider} from "@datapunt/matomo-tracker-react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {ContentWrapper} from "/imports/ui/ContentWrapper";
import {Viewer} from "/imports/ui/Viewer";
import {Rezept, Rezepte} from "/imports/api/models";
// @ts-ignore
import {useSubscribe} from "meteor/react-meteor-data";
import {createRoot} from "react-dom/client";

const matomoUrlBase = Meteor.settings.public.matomoUrlBase;

const isLoading = useSubscribe('rezepte');
const getBySlug = (slug: string): Rezept | string => {
  if (isLoading()) {
    return 'lade...';
  } else {
    return Rezepte.findOne({slug: slug}) ?? `${slug} wurde leider nicht gefunden.`
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => getBySlug('rezeptee'),
    element: (
      <ContentWrapper>
        <Viewer/>
      </ContentWrapper>
    ),
  }
])

const app = matomoUrlBase ? (
  <MatomoProvider value={createInstance({
    urlBase: matomoUrlBase,
    siteId: 2,
    linkTracking: false, // optional, default value: true
  })}>
    <RouterProvider router={router}/>
  </MatomoProvider>
) : (
  <RouterProvider router={router}/>
)

Meteor.startup(() => {
  createRoot(document.getElementById('react-target')!).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
});
