import {matchHeading, matchParagraph, matchType} from "mdast-react-render/lib/utils";
import React from "react";
import {Image} from "./Images";
import { Link } from "react-router-dom";

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
      component: () => <br />
    },
    {
      matchMdast: matchType('tag'),
      component: () => ""
    },
    {
      matchMdast: matchType('comment'),
      props: node => ({value: node.value}),
      component: ({value}) => <em>{value}</em>
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
  ]
}

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
        paragraphRule,
        {
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
              rules: [paragraphRule]
            }
          ]
        },
        {
          matchMdast: matchType("ingredientList"),
          component: ({children}) => <ul className="ingredients">{children}</ul>,
          rules: [
            {
              matchMdast: matchType("listItem"),
              component: ({children}) => <li>{children}</li>,
              rules: [
                {
                  matchMdast: matchType("text"),
                  component: ({value}) => <>{value}</>
                },
                {
                  matchMdast: matchType("quantity"),
                  props: node => ({value: node.value}),
                  component: ({value}) => <span className={"quantity"}>{value}</span>,
                },
                {
                  matchMdast: matchType("unit"),
                  props: node => ({value: node.value}),
                  component: ({value}) => <span className={"unit"}>{value}</span>,
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

export default schema
