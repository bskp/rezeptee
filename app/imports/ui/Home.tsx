import React, {useContext} from "react";
import {Link} from "react-router-dom";
import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";
import {RezeptContext} from "/imports/ui/RezeptContext";
import {getSubdomain} from "/imports/ui/ContentWrapper";
import {Viewer} from "/imports/ui/Viewer";

// Die Startseite einer Sammlung ist ein ganz normales Rezept — jenes mit dem
// START_TAG. Fehlt es, bekommt die Sammlung eine generische Begrüssung, statt
// wie ein verschriebener Slug auszusehen.
export const Home = () => {
  const rezept = useContext(RezeptContext);

  if (rezept !== undefined) {
    return <Viewer/>;
  }

  const space = getSubdomain();

  const title = space ? `${space}.rezept.ee` : 'rezept.ee';
  return <>
    <TrackingDocumentTitle title={title}/>
    <div className="page">
      <h1>{title}</h1>
      <p>
        Diese Sammlung hat noch keine Startseite. Wenn du eines
        ihrer <Link to="/create">Rezepte</Link> mit <code>#start</code> markierst,
        steht es künftig hier.
      </p>
      <p>
        Was es sonst gibt, zeigt die <Link to="/changes">Übersicht</Link>.
      </p>
    </div>
  </>;
}
