import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";
import React, {useContext} from "react";
import {Rezepte} from "/imports/api/models/rezept";
import {DataLoadingContext} from "/imports/ui/ContentWrapper";
import {DateTime} from "luxon";
import {Link} from "react-router-dom";


export const Changes = () => {
  let isLoading = useContext(DataLoadingContext);

  const rezepte = Rezepte.find({createdAt: {$exists: true}}, { sort: { createdAt: -1 }, limit: 20 }).fetch().map(rezept => {
    const date = rezept.createdAt ? DateTime.fromJSDate(rezept.createdAt).toRelative() : ''
    return <li><Link to={'/' + rezept.slug}>{rezept.name}</Link>, {date}</li>;
    }
  );
  const count = Rezepte.find().count() - 1;

  return isLoading ? 'lade' : <>
    <TrackingDocumentTitle title="Aktuelles"/>
    <div className="page">
      <h1>Aktuelles!</h1>
      Toll, es gibt hier {count} Rezepte zu entdecken!

      <h2>Kürzliche Geändert</h2>
      <ul>
        {rezepte}
      </ul>
    </div>
  </>;
};
