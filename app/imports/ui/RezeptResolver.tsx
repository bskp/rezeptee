import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect} from "react";
import {useSubscribe} from "meteor/react-meteor-data";
import {useParams} from "react-router-dom";
import {Rezept, Rezepte} from "/imports/api/models/rezept";

export const RezeptContext =
  createContext<{rezept: Rezept, setRezept?: Dispatch<SetStateAction<Rezept>>}>({rezept: {} as Rezept});

export function RezeptResolver({children}: { children: ReactNode }) {
  const isLoading = useSubscribe('rezepte');
  let params = useParams();
  const context = useContext(RezeptContext);

  if (isLoading()) {
    return <h1>Lade Rezepte…</h1>;
  }

  let slug = params.slug;
  if (slug === undefined) slug = 'rezeptee';

  const rezept = Rezepte.findOne({slug: slug})

  if (rezept === undefined) {
    return <h1>{params.slug} wurde nicht gefunden.</h1>;
  }

  if (rezept._id !== context.rezept?._id && context.setRezept) {
    context.setRezept(rezept);
  }

  return <>{children}</>
}