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
  let tags: Tag[] = useFind(() => Tags.find({}, {sort: {name: 1}}));

  function getFilterTogglingCallback(term: string) {
    return () => setFilter(filter => {
      if (filter.includes(term)) {
        return filter
        .replaceAll(term, " ")
        .replaceAll(/#? +/g, " ")
        .trim();
      } else {
        return filter.trim() + " #" + term;
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
    <input type="text" id="suchtext" autoComplete="off" placeholder="Etwas kochen mit…" onChange={handleKey}
           value={filter}/>
    <span onClick={() => setFilter('')} id="clear_filter">×</span>
    <ul id="taglist">
      {tags.map(tag => {
          // TODO synonyme
          let active = props.rezept?.tagNames.includes(tag.name) ? 'active' : undefined;
          let bgColor = active ? 'hsl(' + hash(tag.name) + ',20%,50%)' : undefined
          return <li key={tag._id} className={active}>
            <a onClick={getFilterTogglingCallback(tag.name)}
               className={active}
               style={{backgroundColor: bgColor}}
            >{tag.name}</a>
          </li>
      })}
    </ul>
    <ul id="rezepte">
      {props.rezepte.map(rezept =>
        <li key={rezept._lineage}>
          <NavLink onClick={() => props.toggler()}
                   activeClassName="active"
                   to={'/' + rezept.slug}>{rezept.name}
          </NavLink>
        </li>
      )}
      <li key="create">
        <NavLink to="/create">Neu…</NavLink>
      </li>
    </ul>
  </aside>
}

function hash(str){
  // From http://werxltd.com
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
