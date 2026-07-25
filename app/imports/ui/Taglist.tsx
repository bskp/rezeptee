import React from "react";
import {visit} from "unist-util-visit";
import {toString} from "mdast-util-to-string";
import {parse, Rezepte} from "/imports/api/models/rezept";
import {useFind} from "meteor/react-meteor-data";

interface TaglistProps {
  activeTags?: string[],
  togglerCallbackFactory: (tag: string) => (addTerms: boolean) => void
}

export const Taglist = (props: TaglistProps) => {
  const tags = useFind(() => Rezepte.find({active: true}, {fields: {tagNames: 1}}))
    .flatMap(r => r.tagNames)
    .filter(tag => tag !== 'meta')
    .filter((tag, i, self) => i === self.indexOf(tag))
    .sort((a, b) => a.localeCompare(b));

  const tagInfoRecipe = Rezepte.findOne({slug: 'tags'});

  const tagInfo = {};
  if (tagInfoRecipe !== undefined) {
    const parsed = parse(tagInfoRecipe);
    visit(parsed.mdast, 'listItem', node => {
      const [tag, description=''] = toString(node).split(':', 2)
      tagInfo[tag] = description
    })
  }

  return <ul id="taglist" >
        {tags.map(tag => {
          const active = props.activeTags?.includes(tag) ? 'active' : undefined;
          const bgColor = active ? 'hsl(' + hash(tag) + ',30%,50%)' : undefined
          return <li key={tag} className={active}>
            <a onClick={(event) => props.togglerCallbackFactory(tag)(event.shiftKey)}
               className={active}
               title={tagInfo[tag]}
               style={{backgroundColor: bgColor}}
            >{tag}</a>
          </li>
        })}
      </ul>
}

function hash(str) {
  // From http://werxltd.com
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
