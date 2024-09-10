import {useNavigate, useSearchParams} from "react-router-dom";
import schema from "/imports/ui/recipe-schema";
import React, {createContext, Dispatch, SetStateAction, TouchEventHandler, useContext} from "react";
import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";
import {RezeptContext, RezeptResolver} from "/imports/ui/RezeptResolver";
import {renderMdast} from "/imports/api/render_mdast/render";

const FACTOR_PARAM_NAME = 'faktor';

export const FactorContext =
  React.createContext<{factor: number, setFactor: Dispatch<SetStateAction<number>>}>({factor: 1, setFactor: factor => {} })

const Viewer_ = ()=> {
  let navigate = useNavigate();
  const rezept = useContext(RezeptContext).rezept;

  // Provide "factor" from URL Search Param as context variable
  let [queryParams, setQueryParams] = useSearchParams()
  const setFactor = (factor: number) => {
    setQueryParams(currentParams => {
      currentParams.set(FACTOR_PARAM_NAME, String(factor));
      return currentParams;
    });
  }
  const factor = Number.parseFloat(queryParams.get(FACTOR_PARAM_NAME) ?? "1")
  const factorValue = {factor, setFactor}

  const navigateToEdit = () => {
    navigate(`/${rezept?.slug}/edit`)
  }

  const touchStartHandler: TouchEventHandler = (event) => {
    if (event.touches.length == 3) {
      event.preventDefault();
      navigateToEdit()
    }
  }

  const contextMenuHandler = event => {
    event.preventDefault();
    navigateToEdit()
  }

  if (!rezept.hasOwnProperty('mdast')) {
    rezept._parse()
  }

  const vdom = renderMdast(rezept.mdast, schema)
  const shareData = {title: rezept.name, url: window.location.href};

  let share = navigator.canShare && navigator.canShare(shareData) ?
    <a id="share" onClick={() => navigator.share(shareData)}></a>
    : undefined

  return (<>
    <TrackingDocumentTitle title={rezept.name}/>
    <FactorContext.Provider value={factorValue}>
      <div className="page"
           onTouchStart={touchStartHandler}
           onContextMenu={contextMenuHandler}>{vdom}</div>
      {share}
    </FactorContext.Provider>
  </>);
}

export const Viewer = () => <RezeptResolver><Viewer_/></RezeptResolver>
