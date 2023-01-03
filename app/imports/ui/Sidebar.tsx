import {Rezept} from "../api/models";
import React, {useRef, useState} from "react";
import NavLink from "./NavLink";
// @ts-ignore
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import {Taglist} from "/imports/ui/Taglist";
import {useMatomo} from "@datapunt/matomo-tracker-react";

interface SidebarProps {
  rezept?: Rezept,
  rezepte: Rezept[],
  toggler: Function,
}

export const Sidebar = (props: SidebarProps) => {
  const [filter, setFilter] = useState('');
  const { trackSiteSearch } = useMatomo();

  function getFilterTogglingCallback(term: string) {
    return () => setFilter(filter => {
      if (filter.includes(term)) {
        return filter
        .replaceAll(term, " ")
        .replaceAll(/#? +/g, " ")
        .trim();
      } else {
        return (filter.trim() + " #" + term).trim()
      }
    });
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Escape') {
      setFilter("")
      event.currentTarget.blur()
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.currentTarget.value);
  }

  let filtered = props.rezepte.filter(rez => !rez.tagNames.includes('meta'))

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
      <Taglist activeTags={props.rezept?.tagNames} togglerCallbackFactory={getFilterTogglingCallback}/>
      <ul id="rezepte" >
        <li key="intro">
          <NavLink to="/">Einführung</NavLink>
        </li>
        <li key="create">
          <NavLink to="/create">Neues Rezept…</NavLink>
        </li>
        <hr noshade="noshade" />
        {filtered.map(rezept =>
          <li key={rezept._lineage}>
            <NavLink activeClassName="active"
                     to={'/' + rezept.slug}>{rezept.name}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  </aside>
}

