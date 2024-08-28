import {useNavigate, useSearchParams} from "react-router-dom";
import {renderMdast} from '@republik/mdast-react-render';
import schema from "/imports/ui/recipe-schema";
import React, {TouchEventHandler, useContext} from "react";
import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";
import {RezeptContext, RezeptResolver} from "/imports/ui/RezeptResolver";

const FACTOR_PARAM_NAME = 'faktor';

export const FactorContext = React.createContext({factor: 1, setFactor: factor => {} })

const Viewer_ = ()=> {
  let navigate = useNavigate();
  const rezept = useContext(RezeptContext).rezept;

  // Provide "factor" from URL Search Param as context variable
  let [queryParams, setQueryParams] = useSearchParams()
  const setFactor = factor => {
    setQueryParams({[FACTOR_PARAM_NAME]: factor})
  }
  const factor = Number.parseFloat(queryParams.get(FACTOR_PARAM_NAME) || "1")
  const factorValue = {factor, setFactor}

  const navigateToEdit = () => {
    navigate(`/${rezept?.slug}/edit`)
  }

  const touchStartHandler : TouchEventHandler = (event) => {
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

  return (<>
    <TrackingDocumentTitle title={rezept.name}/>
    <FactorContext.Provider value={factorValue}>
      <div className="page"
           onTouchStart={touchStartHandler}
           onContextMenu={contextMenuHandler}>{vdom}</div>
    </FactorContext.Provider>
  </>);
}

export const Viewer = () => <RezeptResolver><Viewer_ /></RezeptResolver>
