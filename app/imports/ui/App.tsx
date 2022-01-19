import React, {ChangeEvent, EventHandler, FunctionComponent, MouseEventHandler, useRef, useState} from 'react';
import {Imgs, Rezept, Rezepte} from "../api/models";
import {Sidebar} from "./Sidebar";
import {BrowserRouter, Route, Routes, useNavigate, useParams} from "react-router-dom";
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import DocumentTitle from "react-document-title";
import schema from "./recipe-schema"
import {renderMdast} from "mdast-react-render";
import {Meteor} from 'meteor/meteor';
import {ImageList} from "/imports/ui/Images";


const ContentWrapper = (props) => {
  // TODO: Filter hier reinnehmen!
  const isLoading = useSubscribe('rezepte');
  const rezepte: Rezept[] = useFind(() => Rezepte.find({}, {sort: {name: 1}}));
  let slug = useParams().rezept;

  let [sidebarCollapse, setSidebarCollapse] = useState(true);

  let content = <h1>asdff</h1>;
  let rezept: Rezept | undefined = undefined;

  if (isLoading()) {
    content = <h1>lade...</h1>;
  } else if (slug === undefined) {
    rezept = new Rezept({markdown: "# Testrez\n\nAsdf.\n"});
    content = React.cloneElement(props.children, {rezept: rezept});
  } else {
    rezept = Rezepte.findOne({slug: slug});
    if (rezept === undefined) {
      content = <h1>{slug} wurde leider nicht gefunden.</h1>
    } else {
      content = React.cloneElement(props.children, {rezept: rezept});
    }
  }

  let handleSidebarToggle : React.MouseEventHandler = event => {
    setSidebarCollapse( current => !current );
  }

  return <div className={'contentwrapper ' + (sidebarCollapse ? '' : 'offset')}>
    <section id="content">
      {content}
    </section>
    <Sidebar rezept={rezept} rezepte={rezepte} toggler={() => setSidebarCollapse(true)}/>
    <div onClick={handleSidebarToggle} id="mode_flip"> </div>
  </div>
}

type ContentProps = {
  rezept: Rezept
}

type Content = FunctionComponent<ContentProps>;

function Hello() {
  return <h1>Hallo!</h1>
}

const Editor: Content = ({rezept}) => {
  let [text, setText] = useState(rezept.markdown);
  let navigate = useNavigate();

  const keyHandler: EventHandler<ChangeEvent<HTMLTextAreaElement>> = (event) => {
    setText(event.currentTarget.value);
  }

  const clickHandler: MouseEventHandler = event => {
    save();
    event.preventDefault();
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
    <ImageList namespace={rezept._lineage} />
    <textarea id="editor" onChange={keyHandler} value={text}/>
  </div>
}

const Viewer: Content = ({rezept}) => {
  let navigate = useNavigate();

  const clickHandler = event => {
    navigate(`/${rezept.slug}/edit`)
    event.preventDefault();
  }

  if (!rezept.hasOwnProperty('mdast')) {
    rezept._parse()
  }
  const vdom = renderMdast(rezept.mdast, schema);

  return (<>
    <DocumentTitle title={rezept.name}/>
    <div className="page" onContextMenu={clickHandler}>{vdom}</div>
  </>);
}

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ContentWrapper>
            <Hello/>
          </ContentWrapper>
        }/>
        <Route path='/create' element={
          <ContentWrapper>
            <Editor/>
          </ContentWrapper>
        }/>
        <Route path='/:rezept' element={
          <ContentWrapper>
            <Viewer/>
          </ContentWrapper>
        }/>
        <Route path='/:rezept/edit' element={
          <ContentWrapper>
            <Editor/>
          </ContentWrapper>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

