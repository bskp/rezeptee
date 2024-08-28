import React, {useRef} from "react";
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import {visit} from "unist-util-visit";
import {toString} from "mdast-util-to-string";
import {Tag, Tags} from "/imports/api/models/tag";
import {Rezepte} from "/imports/api/models/rezept";

interface TaglistProps {
  activeTags?: string[],
  togglerCallbackFactory: Function
}

export const Taglist = (props: TaglistProps) => {

  const isLoadingTags = useSubscribe('tags');
  let tags: Tag[] = useFind(() => Tags.find({name: {$ne: 'meta'}}, {sort: {name: 1}}));
  if (isLoadingTags()) tags = [];

  const isLoadingRezepte = useSubscribe('rezepte');
  let tagInfoRecipe = Rezepte.findOne({slug: 'tags', active: true})

  let tagInfo = {};
  if (!isLoadingRezepte() && tagInfoRecipe) {
    visit(tagInfoRecipe.mdast, 'listItem', node => {
      const [tag, description=''] = toString(node).split(':', 2)
      tagInfo[tag] = description
    })
  }

  const tooltip = useRef<HTMLDivElement>(null)

  const setTooltip = function(content, ) {
    return () => {
      if (tooltip.current) tooltip.current.innerText = content || ''
    }
  }

  return <ul id="taglist" >
        {tags.map(tag => {
          let active = props.activeTags?.includes(tag.name) ? 'active' : undefined;
          let bgColor = active ? 'hsl(' + hash(tag.name) + ',30%,50%)' : undefined
          return <li key={tag._id} className={active}>
            <a onClick={props.togglerCallbackFactory(tag.name)}
               className={active}
               title={tagInfo[tag.name]}
               style={{backgroundColor: bgColor}}
               //onMouseEnter={setTooltip(tagInfo[tag.name])}
            >{tag.name}</a>
          </li>
        })}
        <div id="tooltip" ref={tooltip}></div>
      </ul>
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
