import React, {ChangeEvent, EventHandler, MouseEventHandler, useState} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Rezept, Rezepte} from "../api/models";
import Sidebar from "./Sidebar";
import parse, {DOMNode, domToReact} from 'html-react-parser'
import {BrowserRouter, Route, Routes, useNavigate, useParams} from "react-router-dom";




const Page = ({children}) => {
  let rezept;
  let slug = useParams().rezept;
  if (slug === undefined) {
    rezept = new Rezept({text: "# Testrez\n\nAsdf.\n"});
  } else {
    rezept = Rezepte.findOne({slug: slug});
    if (rezept === undefined) {
      return <h1>{slug} wurde leider nicht gefunden.</h1>
    }
  }

  return React.cloneElement(children, {rezept: rezept})
}

function Hello() {
  return <h1>Hallo!</h1>
}

function Editor({rezept}) {
  let [text, setText] = useState(rezept.text);
  let navigate = useNavigate();

  const keyHandler : EventHandler<ChangeEvent<HTMLTextAreaElement>> = (event) => {
    setText(event.currentTarget.value);
  }


  const clickHandler : MouseEventHandler = event => {
    save();
    event.preventDefault();
  }

  const save = () => {
    rezept.text = text;
    Meteor.call('saveRezept', rezept, (error, isValid) => {
      if (error !== undefined) {
        console.log(error);
      }
      navigate(`/${rezept.slug}`);
    });
  }

  return <div onContextMenu={clickHandler}>
    <textarea id="editor" onChange={keyHandler} value={text} />
  </div>
}

function Viewer({rezept}) {
  let navigate = useNavigate();

  const clickHandler = event => {
    navigate(`/${rezept.slug}/edit`)
    event.preventDefault();
  }

  const postprocess = (dom : DOMNode) => {
    return dom;
  }

  let vdom = parse(rezept.html, {replace: postprocess}) as JSX.Element[]
  return <div onContextMenu={clickHandler}>{vdom}</div>
}

export const App = () => {

  return (
    <BrowserRouter>
      <section id="content">
        <Routes>
          <Route path='/' element={<Hello/>}/>
          <Route path='/create' element={<Page><Editor/></Page>}/>
          <Route path='/:rezept' element={<Page><Viewer /></Page>}/>
          <Route path='/:rezept/edit' element={<Page><Editor/></Page>}/>
        </Routes>
      </section>
      <Sidebar/>
    </BrowserRouter>
  )
}

export default withTracker(props => {
  return {
    user: Meteor.user()
  }
})(App)
