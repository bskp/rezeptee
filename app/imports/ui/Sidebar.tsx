import {Rezept, Tag, Tags} from "../api/models";
import React, {useRef, useState} from "react";
import NavLink from "./NavLink";
// @ts-ignore
import {useFind, useSubscribe} from "meteor/react-meteor-data";

interface SidebarProps {
  rezept?: Rezept,
  rezepte: Rezept[],
  toggler: Function,
}

export const Sidebar = (props: SidebarProps) => {
  const [filter, setFilter] = useState('');

  const isLoading = useSubscribe('tags');
  let tags: Tag[] = useFind(() => Tags.find({name: {$ne: 'privat'}}, {sort: {name: 1}}));

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

  if (isLoading()) {
    tags = [];
  }

  let filtered = props.rezepte.filter(rez => !rez.tagNames.includes('privat'))

  for (let term of filter.split(" ")) {
    term = term.toLowerCase()
    filtered = filtered.filter(rez => {
      if (rez.name.toLowerCase().includes(term)) return true
      if (term.startsWith("#") && rez.tagNames.includes(term.substring(1))) return true
      for (let ingr of rez.ingredientNames) {
        if (ingr.startsWith(term)) return true
      }
      return false
    })
  }

  let input = useRef()

  return <aside id="sidebar">
    <div id="filter">
      <input type="text"
             id="suchtext"
             ref={input}
             autoComplete="off"
             placeholder="Etwas kochen mit…"
             onKeyDown={handleKeyDown}
             onChange={handleChange}
             value={filter}/>

      <span onClick={() => {
        setFilter('')
        input.current?.focus()
      }} id="clear_filter">×</span>
    </div>
    <div id="lists">
      <ul id="taglist" >
        {tags.map(tag => {
          let active = props.rezept?.tagNames.includes(tag.name) ? 'active' : undefined;
          let bgColor = active ? 'hsl(' + hash(tag.name) + ',30%,50%)' : undefined
          return <li key={tag._id} className={active}>
            <a onClick={getFilterTogglingCallback(tag.name)}
               className={active}
               style={{backgroundColor: bgColor}}
            >{tag.name}</a>
          </li>
        })}
      </ul>
      <ul id="rezepte" >
        <li key="create">
          <NavLink to="/create">Neues Rezept…</NavLink>
        </li>
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

function hash(str) {
  // From http://werxltd.com
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
