import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";
import React, {useContext, useState} from "react";
import {Rezepte, RezeptStored} from "/imports/api/models/rezept";
import {useFind} from "meteor/react-meteor-data";
import {RezeptContext} from "/imports/ui/RezeptResolver";
import {useNavigate} from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

type RezeptWithAge = RezeptStored & { age?: number };

function followPreviousVersionReferences(versions: RezeptStored[], currentId: string): RezeptWithAge[] {
  const lineage: (RezeptWithAge)[] = [];
  const seenIds = new Set<string>();
  while (currentId !== undefined) {
    const currentVersion = versions.find(v => v._id === currentId);
    if (currentVersion === undefined) break;
    lineage.push({...currentVersion, age: seenIds.size});
    seenIds.add(currentId);
    currentId = currentVersion.previous_version_id;
  }
  return [...lineage, ...versions.filter(version => !seenIds.has(version._id)).reverse()];
}

export const History = () => {
  const rezept = useContext(RezeptContext);
  const navigate = useNavigate();
  const [peeking, setPeeking] = useState<RezeptWithAge>(rezept as RezeptWithAge);

  const versions = useFind(
    () => Rezepte.find({_lineage: rezept?._lineage}, {sort: {createdAt: -1}}),
    [rezept]
  );

  if (rezept === undefined) {
    return <h1>Rezept nicht gefunden</h1>
  }

  const lineage = followPreviousVersionReferences(versions, rezept._id);

  const getLabel = (version: RezeptWithAge) => {
    if (version.age == 0) return 'Aktuell';
    if (version.age === undefined) return 'Version ???';
    return `Version ${versions.length - version.age}`;
  }

  return <>
    <TrackingDocumentTitle title="Aktuelles"/>
    <div className="page">
      <aside id="tools">
        <ol id="history">
          {lineage.map(version => (
            <li key={version._id}
                className={version._id === peeking?._id ? 'peeking' : undefined}
                onMouseEnter={(e) => {
                  setPeeking(version);
                }}
            >
              <div>{getLabel(version)}</div>
              <span>{version.createdAt?.toLocaleString() ?? ''}</span>
            </li>
          ))}
        </ol>
        <a onClick={() => navigate(`/${rezept.slug}/edit`)} className="button cancel"></a>
      </aside>
      <TextareaAutosize id="editor"
                        readOnly={true}
                        value={peeking.markdown}
                        minRows={30}/>
    </div>
  </>;
};