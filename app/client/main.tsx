import React from 'react';
import {Meteor} from 'meteor/meteor';

// Mit dem entfernten less-Package lädt Meteor .less nicht mehr eager, rspack
// kennt kein Gegenstück dazu -- ohne diesen Import fehlt das halbe Stylesheet
// kommentarlos. fonts.css bleibt bewusst draussen: reine .css-Dateien unter
// client/ zieht Meteor weiterhin selbst ein, ein Import hier lüde sie doppelt.
import './rezepte.less';

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
