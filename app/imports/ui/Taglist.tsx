import React, {useContext, useRef} from "react";
import {visit} from "unist-util-visit";
import {toString} from "mdast-util-to-string";
import {Rezepte} from "/imports/api/models/rezept";
import {DataLoadingContext} from "/imports/ui/ContentWrapper";

interface TaglistProps {
  activeTags?: string[],
  togglerCallbackFactory: Function
}

export const Taglist = (props: TaglistProps) => {
  let tags: string[] = [];
  let isLoading = useContext(DataLoadingContext);

  if (!isLoading) {
    let set = new Set(Rezepte.find({}).map(r => r.tagNames).flat());
    set.delete('meta');
    tags = Array.from(set).sort();
  }

  let tagInfoRecipe = Rezepte.findOne({slug: 'tags'});

  let tagInfo = {};
  if (tagInfoRecipe) {
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
          let active = props.activeTags?.includes(tag) ? 'active' : undefined;
          let bgColor = active ? 'hsl(' + hash(tag) + ',30%,50%)' : undefined
          return <li key={tag} className={active}>
            <a onClick={(event) => props.togglerCallbackFactory(tag)(event.metaKey)}
               className={active}
               title={tagInfo[tag]}
               style={{backgroundColor: bgColor}}
               //onMouseEnter={setTooltip(tagInfo[tag.name])}
            >{tag}</a>
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
