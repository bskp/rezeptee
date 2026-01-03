import React, {createContext, ReactNode, useContext} from "react";
import {useParams} from "react-router-dom";
import {RezeptParsed} from "/imports/api/models/rezept";

export const RezeptContext =
  createContext<RezeptParsed | undefined>({} as RezeptParsed);

export const RezeptResolver = ({children}: { children: ReactNode }) => {
  let params = useParams();
  const rezept = useContext(RezeptContext);


  /*
  let slug = params.slug;

  const rezept = Rezepte.findOne({slug: slug ?? 'rezeptee'});

  if (slug === undefined && rezept === undefined) {
    const loc = window.location.host.split('.')[0];
    return <>
      <h1>{loc}</h1>
      <p>Hat noch keine Startseite. <a href="/create">Erstelle ein neues Rezept</a> und gib ihm den Titel <em>Rezept.ee</em>, um deine Sammlung kurz vorzustellen.</p>
    </>
  }
 */

  if (rezept === undefined) {
    return <h1>{params.slug} wurde nicht gefunden.</h1>;
  }

  if (Object.keys(rezept).length === 0) {
    return <h1>Lade {params.slug}…</h1>;
  }

  return <>{children}</>
};