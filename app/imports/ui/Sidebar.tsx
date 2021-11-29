import {Rezept, Rezepte, Tag, Tags} from "../api/models";
import React, {useState} from "react";
import {withTracker} from "meteor/react-meteor-data";
import NavLink from "./NavLink";

interface SidebarProps {
  tagsLoading: boolean,
  rezepteLoading: boolean,
  rezepte: Array<Rezept>,
  tags: Array<Tag>
}

export const Sidebar = (props: SidebarProps) => {
  const [filter, setFilter] = useState('');

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

  return <aside id="list">
    <input type="text" id="suchtext" autoComplete="off" placeholder="Etwas kochen mit…"/>
    <a href="" id="clear_filter">×</a>
    <ul id="taglist">
      {props.tags.map(tag =>
        <li id={tag._id}><a onClick={getFilterTogglingCallback(tag.name)}>#{tag.name}</a></li>
      )}
    </ul>
    <ul id="rezepte">
      {props.rezepte.map(rezept =>
        <li id={rezept._id}><NavLink to={rezept.slug}>{rezept.name}</NavLink></li>
      )}
      <li id="new"><NavLink to="create">Neu…</NavLink></li>
    </ul>
  </aside>
}

export default withTracker(props => {
  const rezHandle = Meteor.subscribe('rezepte')
  const tagHandle = Meteor.subscribe('tags')

  return {
    rezepteLoading: !rezHandle.ready(),
    tagsLoading: !tagHandle.ready(),
    rezepte: Rezepte.find({}, {sort: {title: 1}}).fetch(),
    tags: Tags.find({}).fetch()
  }
})(Sidebar)

