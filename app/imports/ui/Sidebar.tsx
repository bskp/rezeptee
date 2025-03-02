import React, {useContext, useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import {Taglist} from "/imports/ui/Taglist";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import {RezeptContext} from "/imports/ui/RezeptResolver";
import {useFind} from "meteor/react-meteor-data";
import {Rezept, Rezepte} from "/imports/api/models/rezept";

interface SidebarProps {
  toggler: Function,
}

export const Sidebar = (props: SidebarProps) => {
  const rezepte: Rezept[] = useFind(() => Rezepte.find({}, {sort: {name: 1}}));

  const [filter, setFilter] = useState('');
  const {trackSiteSearch} = useMatomo();
  const activeTags = useContext(RezeptContext).rezept?.tagNames ?? [];
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

  let filtered = rezepte.filter(rez => !rez.tagNames.includes('meta'))

  for (let term of filter.split(" ")) {
    term = term.toLowerCase()
    filtered = filtered.filter(rez => {
      if (rez.name.toLowerCase().includes(term)) return true
      if (term.startsWith("#") && rez.tagNames.includes(term.substring(1))) return true
      for (let ingr of rez.ingredientNames) {
        if (ingr.includes(term)) return true
      }
      return false
    })
  }

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    trackSiteSearch({
      keyword: filter,
      category: '',
      count: filtered.length
    })
  };

  let input = useRef<HTMLInputElement>(null)
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
          return <li key={rezept._lineage}>
              <NavLink to={'/' + rezept.slug} onClick={sideBarToggle}>{rezept.name}</NavLink>
            </li>;
          }
        )}
      </ul>
    </div>
  </aside>
}

