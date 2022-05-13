import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {App} from '../imports/ui/App';
import {createInstance, MatomoProvider} from "@datapunt/matomo-tracker-react";

const matomoUrlBase = Meteor.settings.public.matomoUrlBase;

const app = matomoUrlBase ? (
  <MatomoProvider value={createInstance({
    urlBase: matomoUrlBase,
    siteId: 2,
    linkTracking: false, // optional, default value: true
  })}>
    <App />
  </MatomoProvider>
) : (
  <App />
)

Meteor.startup(() => {
  render(app, document.getElementById('react-target'));
});
