import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext} from "react";
import {useParams} from "react-router-dom";
import {Rezept, Rezepte} from "/imports/api/models/rezept";
import {DataLoadingContext} from "/imports/ui/ContentWrapper";

export const RezeptContext =
  createContext<{ rezept: Rezept, setRezept?: Dispatch<Rezept> }>({rezept: {} as Rezept});

export function RezeptResolver({children}: { children: ReactNode }) {
  const isLoading = useContext(DataLoadingContext);
  let params = useParams();
  const context = useContext(RezeptContext);

  if (isLoading) {
    return <h1>Lade Rezepte…</h1>;
  }

  let slug = params.slug;
  if (slug === undefined) slug = 'rezeptee';

  const rezept = Rezepte.findOne({slug: slug});

  if (rezept === undefined) {
    return <h1>{params.slug} wurde nicht gefunden.</h1>;
  }

  if (rezept._id !== context.rezept?._id && context.setRezept) {
    context.setRezept(rezept);
  }

  if (Object.keys(context.rezept).length === 0) {
    return <h1>Lade {params.slug}…</h1>;
  }

  return <>{children}</>
}