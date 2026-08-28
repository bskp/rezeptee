import React, {useContext, useEffect, useRef, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Taglist} from "/imports/ui/Taglist";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import {RezeptContext} from "/imports/ui/RezeptContext";
import {useFind} from "meteor/react-meteor-data";
import {META_TAG, Rezepte, RezeptStored} from "/imports/api/models/rezept";

interface SidebarProps {
  toggler: () => void,
}

export const Sidebar = (props: SidebarProps) => {
  const rezepte: RezeptStored[] = useFind(() => Rezepte.find({active: true}, {sort: {name: 1}}));

  const [filter, setFilter] = useState('');
  const {trackSiteSearch} = useMatomo();
  const rezeptContext = useContext(RezeptContext);
  const activeTags = rezeptContext?.tagNames ?? [];
  const currentSlug = rezeptContext?.slug;
  const navigate = useNavigate();
  const input = useRef<HTMLInputElement>(null)
  const sideBarToggle = () => props.toggler();

  function getFilterTogglingCallback(term: string) {
    return (addTerms: boolean) => setFilter(filter => {
      if (filter.includes(term)) {
        return filter
          .replaceAll(term, " ")
          .replaceAll(/#? +/g, " ")
          .trim();
      }
      if (!addTerms) {
        return "#" + term.trim()
      }
      return (filter.trim() + " #" + term).trim()
    });
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Escape') {
      setFilter("");
      event.currentTarget.blur();
      event.preventDefault();
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.currentTarget.value);
  }

  const terms = filter.toLowerCase().split(" ").filter(term => term !== '');

  // Meta-Seiten sind ausgeblendet — ausser man sucht ausdrücklich nach ihnen.
  const showMeta = terms.includes('#' + META_TAG);
  let filtered = showMeta ? rezepte : rezepte.filter(rez => !rez.tagNames.includes(META_TAG))

  for (const term of terms) {
    filtered = filtered.filter(rez => {
      if (rez.name.toLowerCase().includes(term)) return true;
      if (term.startsWith("#") && rez.tagNames.includes(term.substring(1))) return true;
      for (const ingr of rez.ingredientNames) {
        if (ingr.includes(term)) return true;
      }
      if (rez.markdown.includes(term)) return true
      return false
    })
  }

  // Pfeil hoch/runter blättert durch die aktuell gefilterte Liste. Der Listener
  // wird nur einmal registriert; den jeweils aktuellen Stand liest er aus einem
  // Ref, damit er nicht bei jedem Tastendruck neu aufgehängt werden muss.
  const navState = useRef({slugs: [] as string[], currentSlug, navigate, sideBarToggle});
  useEffect(() => {
    navState.current = {slugs: filtered.map(rez => rez.slug), currentSlug, navigate, sideBarToggle};
  });
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;

      // In Textfeldern (Editor, andere Inputs) haben die Pfeiltasten Vorrang —
      // ausser im Suchfeld der Sidebar, von wo aus das Blättern praktisch ist.
      const target = event.target as HTMLElement | null;
      if (target && target !== input.current &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' || target.isContentEditable)) return;

      const {slugs, currentSlug} = navState.current;
      if (slugs.length === 0) return;

      const currentIndex = currentSlug ? slugs.indexOf(currentSlug) : -1;
      let nextIndex: number;
      if (currentIndex === -1) {
        nextIndex = event.key === 'ArrowDown' ? 0 : slugs.length - 1;
      } else {
        nextIndex = currentIndex + (event.key === 'ArrowDown' ? 1 : -1);
        if (nextIndex < 0 || nextIndex >= slugs.length) return;
      }

      event.preventDefault();
      navState.current.navigate('/' + slugs[nextIndex]);
      navState.current.sideBarToggle();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleBlur = () => {
    if (!filter) {
      return;
    }
    trackSiteSearch({
      keyword: filter,
      category: '',
      count: filtered.length
    })
  };

  const introCreateNew = <>
    <li key="intro"><NavLink to="/" onClick={sideBarToggle}>Einführung</NavLink></li>
    <li key="changes"><NavLink to="/changes" onClick={sideBarToggle}>Übersicht</NavLink></li>
    <li key="create"><NavLink to="/create" onClick={sideBarToggle}>Neues Rezept…</NavLink></li>
  </>

  return <aside id="sidebar">
    <div id="filter">
      <input type="text"
             id="suchtext"
             ref={input}
             autoComplete="off"
             placeholder="Etwas kochen mit…"
             onKeyDown={handleKeyDown}
             onChange={handleChange}
             onBlur={handleBlur}
             value={filter}/>

      <span onClick={() => {
        setFilter('')
        input.current?.focus()
      }} id="clear_filter">×</span>
    </div>
    <div id="lists">
      <Taglist activeTags={activeTags} togglerCallbackFactory={getFilterTogglingCallback}/>
      <ul id="rezepte">
        {filter == '' ? introCreateNew : undefined}
        <hr/>
        {filtered.map(rezept => {
            return <li key={rezept._id}>
              <NavLink to={'/' + rezept.slug} onClick={sideBarToggle}>{rezept.name}</NavLink>
            </li>;
          }
        )}
      </ul>
    </div>
  </aside>
}

