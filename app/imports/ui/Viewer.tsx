import {useNavigate} from "react-router-dom";
import {renderMdast} from 'mdast-react-render';
import schema from "/imports/ui/recipe-schema";
import React from "react";
import DocumentTitle from "react-document-title"
import {Content} from "/imports/ui/App";
import { useSearchParams } from "react-router-dom";

const FACTOR_PARAM_NAME = 'faktor';

export const FactorContext = React.createContext({factor: 1, setFactor: f => {} })

export const Viewer: Content = ({rezept}) => {
  let navigate = useNavigate();

  // Provide "factor" from URL Search Param as context variable
  let [queryParams, setQueryParams] = useSearchParams()
  const setFactor = factor => {
    setQueryParams({[FACTOR_PARAM_NAME]: factor})
  }
  const factor = Number.parseFloat(queryParams.get(FACTOR_PARAM_NAME) || "1")
  const factorValue = {factor, setFactor}

  const clickHandler = event => {
    navigate(`/${rezept.slug}/edit`)
    event.preventDefault();
  }

  if (!rezept.hasOwnProperty('mdast')) {
    rezept._parse()
  }

  const vdom = renderMdast(rezept.mdast, schema)

  return (<>
    <DocumentTitle title={rezept.name}/>
    <FactorContext.Provider value={factorValue}>
      <div className="page" onContextMenu={clickHandler}>{vdom}</div>
    </FactorContext.Provider>
  </>);
}
