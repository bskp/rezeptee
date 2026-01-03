import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";
import React from "react";
import {Rezepte, Spaces} from "/imports/api/models/rezept";
import {DateTime} from "luxon";
import {Link} from "react-router-dom";
import {useFind} from "meteor/react-meteor-data";

export const Changes = () => {

  const rezepte = useFind(
    () => Rezepte.find({createdAt: {$exists: true}, active: true}, {sort: {createdAt: -1}, limit: 20}))
    .map(rezept => {
        const date = rezept.createdAt ? DateTime.fromJSDate(rezept.createdAt).toRelative() : ''
        return <li key={rezept._id}><Link to={'/' + rezept.slug}>{rezept.name}</Link>, {date}</li>;
      }
    );

  const spaces = useFind(() => Spaces.find())
    .filter(space => space._id !== 'global')
    .sort((a, b) => b.count - a.count);

  const sub = (id: string) => (id == 'root' ? '' : id + '.') + 'rezept.ee';

  return <>
    <TrackingDocumentTitle title="Aktuelles"/>
    <div className="page">
      <h1>Übersicht</h1>

      <h2>Sammlungen</h2>
      <p>
        Es gibt bis jetzt {spaces.length} Rezeptsammlungen:</p>
      <ul>
        {spaces.map(space =>
          <li key={space._id}>
            <a href={`https://${sub(space._id)}`}>{sub(space._id)}</a> ({space.count} Rezepte)
          </li>
        )}
      </ul>
      <p>
        Erstelle deine eigene Sammlung, indem du den gewünschten Namen in die
        Adressleiste eintippst (<em>wunschname.rezept.ee</em>).
      </p>
      <p>
        Falls noch ungenutzt, kannst du dort deine eigene Sammlung starten!
      </p>

      <h2>Kürzlich geändert in dieser Sammlung</h2>
      <ul>
        {rezepte}
      </ul>
    </div>
  </>;
};
