import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";
import React from "react";
import {FactorContext} from "/imports/ui/Viewer";

export function Changes() {
  return (<>
    <TrackingDocumentTitle title="Aktuelles" />
    <div className="page">
        <h1>Aktuelles</h1>
      </div>
  </>);
}
