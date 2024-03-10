import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Rezept, Rezepte} from "/imports/api/models";
import {Meteor} from "meteor/meteor";
import {ImageList} from "/imports/ui/Images";
import TextareaAutosize from "react-textarea-autosize";
import {Content} from "/imports/ui/App";
import TrackingDocumentTitle from "/imports/ui/TrackingDocumentTitle";

export const Editor = ({rezept}) => {
  let [text, setText] = useState(rezept.markdown);
  let [dirty, setDirty] = useState(false)
  let navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    let text = event.currentTarget.value
    if (dirty) {
      text = text.replace(/(\n(\s*)){3,}/g, "\n\n$2")
      setDirty(false)
    }
    setText(text);
  }

  const handleKeyDown: React.KeyboardEventHandler = event => {
    const t = event.currentTarget as HTMLTextAreaElement
    const row = t.value.substring(0, t.selectionStart).split("\n").pop() || ""

    if (event.key == 'Tab') {
      t.setRangeText("    ", t.selectionStart, t.selectionEnd, "end")
      event.preventDefault()
      return
    }
    if (event.key == 'Backspace') {
      if (row.endsWith("    ")) {
        t.setRangeText("", t.selectionStart - 4, t.selectionEnd, "end")
        event.preventDefault()
        return
      }
    }
    if (event.key == 'Enter') {
      const autocomplete = (given: RegExp, completeWith) => {
        let match = row.match(given)
        if (match == null) return false
        if (match[2] == '') {
          // Nothing was added after the autocompletion.
          // This means the list/indentation ends, and we remove the previously inserted continuations.
          t.setRangeText("", t.selectionStart - row.length, t.selectionEnd, "end")
          return true
        }
        let replacement = "\n" + match[0].replace(given, completeWith)
        t.setRangeText(replacement, t.selectionStart, t.selectionEnd, "end")
        event.preventDefault()
        return true
      }
      if (
        autocomplete(/^((?: {4})+) *(\S*)/, "$1") ||
        autocomplete(/^( *[\-+*]) *(\S*)/, "$1 ") ||
        autocomplete(/^ *(\d+)\. *(\S*)/, (all, d) => (Number.parseInt(d, 10) + 1) + ". ")
      ) return
    }
  }

  const handleContextMenu: React.MouseEventHandler = event => {
    save();
    event.preventDefault();
  }

  const handleDrop: React.DragEventHandler = event => {
    setDirty(true)
  }

  const save = () => {
    rezept.markdown = text;
    Meteor.call('saveRezept', rezept, (error, newSlug) => {
      if (error !== undefined) {
        console.log(error);
      }
      navigate(`/${newSlug || ""}`);
    });
  }

  return <div onContextMenu={handleContextMenu}>
    <TrackingDocumentTitle title={rezept.name + " (bearbeite)"}/>
    <aside id="tools">
      <ImageList namespace={rezept._lineage}/>
      <a onClick={save} className="button">Sichern</a>
      <a onClick={() => navigate(`/${rezept.slug}`)} className="button">Verwerfen</a>
    </aside>
    <TextareaAutosize id="editor"
                      onChange={handleChange}
                      onDrop={handleDrop}
                      onKeyDown={handleKeyDown}
                      value={text}
                      minRows={30}/>
  </div>
}

export const getTemplateRecipe = () => new Rezept({
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
} as unknown as Rezept);
