import {useNavigate, useSearchParams} from "react-router-dom";
import schema from "/imports/ui/recipe-schema";
import React, {Dispatch, SetStateAction, TouchEventHandler, useContext, useEffect} from "react";
import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";
import {RezeptContext} from "/imports/ui/RezeptContext";
import {renderMdast} from "/imports/api/render_mdast/render";
import {useWakeLock} from "/imports/ui/useWakeLock";

const FACTOR_PARAM_NAME = 'faktor';

export const FactorContext =
  React.createContext<{factor: number, setFactor: Dispatch<SetStateAction<number>>}>({factor: 1, setFactor: () => {} })

export const Viewer = ()=> {
  const navigate = useNavigate();
  const rezept = useContext(RezeptContext);
  const wakeLock = useWakeLock(true);

  useEffect(() => {
    console.debug("[WakeLock]", {
      supported: wakeLock.isSupported,
      active: wakeLock.isActive,
      error: wakeLock.error ?? null,
    });
  }, [wakeLock.isSupported, wakeLock.isActive, wakeLock.error]);

  // Provide "factor" from URL Search Param as context variable
  const [queryParams, setQueryParams] = useSearchParams()
  const setFactor = (factor: number) => {
    setQueryParams(currentParams => {
      currentParams.set(FACTOR_PARAM_NAME, String(factor));
      return currentParams;
    });
  }
  const factor = Number.parseFloat(queryParams.get(FACTOR_PARAM_NAME) ?? "1")
  const factorValue = {factor, setFactor}

  if (rezept === undefined) {
    return <h1>Rezept nicht gefunden.</h1>;
  }

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

  const vdom = renderMdast(rezept.mdast, schema)
  const shareData = {title: rezept.name, url: window.location.href};

  const share = navigator.canShare && navigator.canShare(shareData) ?
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
