import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext} from "react";
import {useParams} from "react-router-dom";
import {parse, Rezepte, RezeptParsed, RezeptStored} from "/imports/api/models/rezept";
import {DataLoadingContext} from "/imports/ui/ContentWrapper";

export const RezeptContext =
  createContext<{ rezept: RezeptParsed, handleRezeptUpdate?: Dispatch<RezeptParsed> }>({rezept: {} as RezeptParsed});

export const RezeptResolver = ({children}: { children: ReactNode }) => {
  const isLoading = useContext(DataLoadingContext);
  let params = useParams();
  const context = useContext(RezeptContext);

  if (isLoading) {
    return <h1>Lade Rezepte…</h1>;
  }

  let slug = params.slug;

  const rezept = Rezepte.findOne({slug: slug ?? 'rezeptee'});

  if (slug === undefined && rezept === undefined) {
    const loc = window.location.host.split('.')[0];
    return <>
      <h1>{loc}</h1>
      <p>Hat noch keine Startseite. <a href="/create">Erstelle ein neues Rezept</a> und gib ihm den Titel <em>Rezept.ee</em>, um deine Sammlung kurz vorzustellen.</p>
    </>
  }

  if (rezept === undefined) {
    return <h1>{params.slug} wurde nicht gefunden.</h1>;
  }

  if (rezept._id !== context.rezept?._id && context.handleRezeptUpdate) {
    context.handleRezeptUpdate(parse(rezept));
  }

  if (Object.keys(context.rezept).length === 0) {
    return <h1>Lade {params.slug}…</h1>;
  }

  return <>{children}</>
};