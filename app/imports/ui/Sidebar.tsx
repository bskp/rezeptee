import {Rezept, Tag, Tags} from "../api/models";
import React, {useState} from "react";
import NavLink from "./NavLink";
import {useFind, useSubscribe} from "meteor/react-meteor-data";

interface SidebarProps {
  rezept?: Rezept,
  rezepte: Rezept[],
  toggler: Function,
}

export const Sidebar = (props: SidebarProps) => {
  const [filter, setFilter] = useState('');

  const isLoading = useSubscribe('tags');
  let tags : Tag[] = useFind(() => Tags.find({}, {sort: {name: 1}}));

  function getFilterTogglingCallback(term: string) {
    return () => setFilter(filter => {
      if (filter.includes(term)) {
        return filter
        .replaceAll(term, " ")
        .replaceAll(" +", " ")
        .trim();
      } else {
        return filter.trim() + " " + term;
      }
    });
  }

  function handleKey(event) {
    setFilter(() => event.target.value);
  }

  if (isLoading()) {
    tags = [new Tag({name: 'Lade Tags TODO'})];
  }

  return <aside id="list">
    <input type="text" id="suchtext" autoComplete="off" placeholder="Etwas kochen mit…" onChange={handleKey} value={filter}/>
    <span onClick={() => setFilter('') } id="clear_filter">×</span>
    <ul id="taglist">
      {tags.map(tag => {
          // TODO synonyme
          let active = tag.containedIn(props.rezept?.tagNames) ? 'active' : undefined;
          return <li key={tag._id}><a onClick={getFilterTogglingCallback(tag.name)} className={active}>{tag.name}</a></li>
        }
      ) }
    </ul>
    <ul id="rezepte">
      {props.rezepte.map(rezept =>
        <li key={rezept._id}><NavLink onClick={() => props.toggler()} activeClassName="active" to={'/'+rezept.slug}>{rezept.name}</NavLink></li>
      )}
      <li key="new"><NavLink to="/create">Neu…</NavLink></li>
    </ul>
  </aside>
}

