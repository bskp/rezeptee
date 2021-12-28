import React, {ChangeEvent, cloneElement, EventHandler, FunctionComponent, MouseEventHandler, useState} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Rezept, Rezepte, Tags} from "../api/models";
import {Sidebar} from "./Sidebar";
import parse, {DOMNode, domToReact} from 'html-react-parser'
import {BrowserRouter, Route, Routes, useNavigate, useParams} from "react-router-dom";
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import DocumentTitle from "react-document-title";


const Page = (props) => {
  // TODO: Filter hier reinnehmen!
  const isLoading = useSubscribe('rezepte');
  const rezepte: Rezept[] = useFind(() => Rezepte.find({}, {sort: {title: 1}}));
  let slug = useParams().rezept;

  let content = <h1>?f</h1>;
  let rezept = undefined;

  if (isLoading()) {
    content = <h1>lade...</h1>;
  } else if (slug === undefined) {
    rezept = new Rezept({text: "# Testrez\n\nAsdf.\n"});
  } else {
    rezept = Rezepte.findOne({slug: slug});
    if (rezept === undefined) {
      content = <h1>{slug} wurde leider nicht gefunden.</h1>
    } else {
      content = React.cloneElement(props.children, {rezept: rezept});
    }
  }

  return <>
    <section id="content">
      {content}
    </section>
    <Sidebar rezept={rezept} rezepte={rezepte}/>
  </>
}

type ContentProps = {
  rezept: Rezept
}

type Content = FunctionComponent<ContentProps>;

function Hello() {
  console.log("asf");
  return <h1>Hallo!</h1>
}

const Editor: Content = ({rezept}) => {
  let [text, setText] = useState(rezept.text);
  let navigate = useNavigate();

  const keyHandler: EventHandler<ChangeEvent<HTMLTextAreaElement>> = (event) => {
    setText(event.currentTarget.value);
  }

  const clickHandler: MouseEventHandler = event => {
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
    <DocumentTitle title={rezept.name + " (bearbeite)"} />
    <textarea id="editor" onChange={keyHandler} value={text}/>
  </div>
}

const Viewer: Content = ({rezept}) => {
  let navigate = useNavigate();

  const clickHandler = event => {
    navigate(`/${rezept.slug}/edit`)
    event.preventDefault();
  }

  const postprocess = (dom: DOMNode) => {
    return dom;
  }

  let vdom = parse(rezept.html, {replace: postprocess}) as JSX.Element[]
  return (<>
      <DocumentTitle title={rezept.name} />
      <div onContextMenu={clickHandler}>{vdom}</div>
    </>);
}

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Page>
            <Hello/>
          </Page>
        }/>
        <Route path='/create' element={
          <Page>
            <Editor/>
          </Page>
        }/>
        <Route path='/:rezept' element={
          <Page>
            <Viewer/>
          </Page>
        }/>
        <Route path='/:rezept/edit' element={
          <Page>
            <Editor/>
          </Page>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

/*
export default withTracker(props => {
  const rezHandle = Meteor.subscribe('rezepte')
  const tagHandle = Meteor.subscribe('tags')

  return {
    user: Meteor.user(),
    rezepteLoading: !rezHandle.ready(),
    tagsLoading: !tagHandle.ready(),
    rezepte: Rezepte.find({}, {sort: {title: 1}}).fetch(),
    tags: Tags.find({}).fetch()
  }
})(App)
 */
