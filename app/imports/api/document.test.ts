import {markdownToAst} from "./document";
import assert from "assert";
import React from "react";
import {removePosition} from "unist-util-remove-position";
import {matchHeading, matchParagraph, matchType, renderMdast} from "/imports/api/render_mdast";

const mdast = {
  'type': 'root',
  'children': [
    {
      'type': 'heading',
      'depth': 1,
      'children': [{
        'type': 'text',
        'value': 'The Titel'
      }]
    },
    {
      'type': 'paragraph',
      'children': [{
        'type': 'text',
        'value': '«A good lead.»'
      }]
    }
  ]
}

const schema = {
  rules: [
    {
      matchMdast: matchType('root'),
      component: ({ children }) => React.createElement('div', null, children),
      rules: [
        {
          matchMdast: matchHeading(1),
          component: ({ children }) => React.createElement('h1', null, children),
        },
        {
          matchMdast: matchParagraph,
          component: ({ children }) => React.createElement('p', null, children),
        }
      ]
    }
  ]
}

const mdast_result = {
  "children": [
  {
    "children": [
      {
        "type": "text",
        "value": "A h1 title"
      }
    ],
    "depth": 1,
    "type": "heading"
  }
],
"type": "root"
}

describe('Markdown to react parsing', () => {
  it('Markdown to mdast', () => {

    let md = "A h1 title\n=======\n";

    let actual = markdownToAst(md);
    actual = removePosition(actual, true);
    assert.deepEqual(actual, mdast_result);
  });

  it('mdast to react', () => {
    assert.doesNotThrow(() => {
        console.log(renderMdast(mdast, schema));
      }
    )
  });

  it('Test ingredientProcessor', () => {
    assert.doesNotThrow( () => {
      let md = `
Testtitel
=========

    1 Zwiebel
    100g Teigis

`;
      let tree = markdownToAst(md);
      console.dir(tree);
    });
  });
});

