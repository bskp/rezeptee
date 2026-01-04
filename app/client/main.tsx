import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createInstance, MatomoProvider} from "@datapunt/matomo-tracker-react";
import {createRoot} from "react-dom/client";
import {App} from "/imports/ui/App";
import {MatomoProviderProps} from "@datapunt/matomo-tracker-react/es/MatomoProvider";

const MatomoProviderTyped = MatomoProvider as React.ComponentType<MatomoProviderProps & { children: React.ReactNode }>;

const instance = createInstance({
  urlBase: Meteor.settings.public.matomoUrlBase || 'http://localhost',
  siteId: 2,
  linkTracking: false, // optional, default value: true
});

Meteor.startup(() => {
  createRoot(document.getElementById('react-target')!).render(
    <MatomoProviderTyped value={instance}>
        <App/>
    </MatomoProviderTyped>
  );
});
