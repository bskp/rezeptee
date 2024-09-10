import {matchHeading, matchParagraph, matchType} from "/imports/api/render_mdast/utils";
import React, {useRef} from "react";
import {Image} from "./Images";
import {Link} from "react-router-dom";
import {ItemQuantity} from "/imports/ui/ItemQuantity";

const List = ({children, data, attributes = {}}) => data.ordered
  ? <ol start={data.start} {...attributes}>{children}</ol>
  : <ul>{children}</ul>

const isExternalURL = (url) => {
  return new URL(url, location.origin).origin !== location.origin;
};

const paragraphRule = {
  matchMdast: matchParagraph,
  component: ({children}) => <p>{children}</p>,
  rules: [
    {
      matchMdast: matchType('strong'),
      component: ({children}) => <strong>{children}</strong>
    },
    {
      matchMdast: matchType('emphasis'),
      component: ({children}) => <em>{children}</em>
    },
    {
      matchMdast: matchType('image'),
      props: node => ({
        id: node.url,
        alt: node.alt
      }),
      component: Image
    },
    {
      matchMdast: matchType('break'),
      component: () => <br/>
    },
    {
      matchMdast: matchType('tag'),
      component: () => ""
    },
    {
      matchMdast: matchType('collection'),
      component: () => ""
    },
    {
      matchMdast: matchType('link'),
      props: node => ({
        url: node.url,
        isExternal: isExternalURL(node.url)
      }),
      component: ({url, isExternal, children}) =>
        isExternal ? <a href={url} target='_blank'>{children}</a> : <Link to={url}>{children}</Link>
    },
    {
      matchMdast: matchType('inlineCode'),
      props: node => ({value: node.value}),
      component: ({value}) => <code>{value}</code>
    },
  ]
}

const makeListRule = function(allowedContents) {
  return {
    matchMdast: matchType('list'),
    component: List,
    props: node => ({
      data: {
        ordered: node.ordered,
        start: node.start
      }
    }),
    rules: [
      {
        matchMdast: matchType('listItem'),
        component: ({children}) => <li>{children}</li>,
        rules: allowedContents
      }
    ]
  }
}

const terminalListRule = makeListRule([paragraphRule])
const listRule = makeListRule([paragraphRule, terminalListRule])

const schema = {
  rules: [
    {
      matchMdast: matchType('root'),
      component: ({children}) => <div>{children}</div>,
      rules: [
        {
          matchMdast: matchHeading(1),
          component: ({children}) => <h1>{children}</h1>
        },
        {
          matchMdast: matchHeading(2),
          component: ({children}) => <h2>{children}</h2>
        },
        {
          matchMdast: matchType('thematicBreak'),
            component: ({value}) => <hr>{value}</hr>
        },
        paragraphRule,
        listRule,
        {
          matchMdast: matchType('blockquote'),
          component: ({children}) => <blockquote>{children}</blockquote>,
        },
        {
          matchMdast: matchType("ingredientList"),
          component: ({children}) => <ul className="ingredients">{children}</ul>,
          rules: [
            {
              matchMdast: matchType("listItem"),
              component: IngredientItem,
              rules: [
                {
                  matchMdast: matchType("text"),
                  component: () => <hr />,
                },
                {
                  matchMdast: matchType("quantity"),
                  props: node => ({value: node.value}),
                  component: ItemQuantity,
                },
                {
                  matchMdast: matchType("unit"),
                  props: node => ({value: node.value}),
                  component: ({value}) => <span className={"unit"}>{value.trim()}</span>,
                },
                {
                  matchMdast: matchType("ingredient"),
                  props: node => ({value: node.value}),
                  component: ({value}) => <span className={"ingredient"}>{value}</span>,
                },
              ]
            }
          ]
        }
      ]
    }
  ]
}

function IngredientItem(props: { children }) {
  const ref = useRef<HTMLLIElement>(null)
  const clickHandler: React.MouseEventHandler = () => {
    const quantityNode = ref?.current?.querySelector('.quantity');
    if (quantityNode) { // @ts-ignore
      quantityNode.click()
    }
  }

  return <li onClick={clickHandler} ref={ref}>{props.children}</li>;
}

export default schema
