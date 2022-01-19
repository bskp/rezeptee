import React, {ChangeEvent, EventHandler, MouseEventHandler, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Rezept} from "/imports/api/models";
import {Meteor} from "meteor/meteor";
import {ImageList} from "/imports/ui/Images";
import DocumentTitle from "react-document-title";
import TextareaAutosize from "react-textarea-autosize";
import {Content} from "/imports/ui/App";

export const Editor: Content = function({rezept}) {
  let [text, setText] = useState(rezept.markdown);
  let [dirty, setDirty] = useState(false)
  let navigate = useNavigate();


  const keyHandler: EventHandler<ChangeEvent<HTMLTextAreaElement>> = (event) => {
    let text = event.currentTarget.value
    if (dirty) {
      text = text.replace(/(\n\s*){3,}/g, "\n\n")
      setDirty(false)
    }
    setText(text);
  }

  const clickHandler: MouseEventHandler = event => {
    save();
    event.preventDefault();
  }

  const handleDrop: React.DragEventHandler = event => {
    setDirty(true)
  }

  const save = () => {
    rezept.markdown = text;
    Meteor.call('saveRezept', rezept, (error, isValid) => {
      if (error !== undefined) {
        console.log(error);
      }
      navigate(`/${rezept.slug}`);
    });
  }

  return <div onContextMenu={clickHandler}>
    <DocumentTitle title={rezept.name + " (bearbeite)"}/>
    <ImageList namespace={rezept._lineage}/>
    <TextareaAutosize id="editor"
                      onChange={keyHandler}
                      onDrop={handleDrop}
                      value={text}
                      minRows={30}/>
  </div>
}

export const template = new Rezept({
  markdown: "#outdoor #vegi\n" +
    "\n" +
    "Ein Beispielrezept! Der Weg ist das Ziel ~\n" +
    "\n" +
    "Sandkuchen à la Bruno\n" +
    "=====================\n" +
    "\n" +
    "Für 2 Personen, ca. 20 min.\n" +
    "\n" +
    "    2 Blätter Löwenzahn\n" +
    "    1 kg Sand, grobkörnig\n" +
    "    1 l Wasser, brackig\n" +
    "    10 Margeritenköpfe \n" +
    "\n" +
    "\n" +
    "1. In einem Kessel Wasser abmessen, Sand sorgfältig einrieseln lassen und während 15 min kräftig umrühren.\n" +
    "2. Kessel herumzeigen. Margeriten beifügen und mit Löwenzahn abschmecken.\n" +
    "\n" +
    "Ich nehme jeweils Sand, der von Katzen als Klo benutzt wurde. Gibt einfach das vollere Aroma ~mr\n"
});
