import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createInstance, MatomoProvider} from "@datapunt/matomo-tracker-react";
import {createRoot} from "react-dom/client";
import {App} from "/imports/ui/App";

const matomoUrlBase = Meteor.settings.public.matomoUrlBase;

Meteor.startup(() => {
  createRoot(document.getElementById('react-target')!).render(
    <React.StrictMode>
      {matomoUrlBase ? (
        <MatomoProvider value={createInstance({
          urlBase: matomoUrlBase,
          siteId: 2,
          linkTracking: false, // optional, default value: true
        })}>
          <App/>
        </MatomoProvider>
      ) : (
        <App/>
      )}
    </React.StrictMode>
  );
});
