import {Transformer, unified} from "unified";
// @ts-ignore
import {renderMdast} from 'mdast-react-render';
// @ts-ignore
import {matchHeading, matchParagraph, matchType} from 'mdast-react-render/lib/utils';
import remarkParse from "remark-parse";
import {is} from 'unist-util-is'
import {listItem, text} from 'mdast-builder'
import {map} from "unist-util-map";
import {Node, Parent} from 'unist';
import {Code} from 'mdast';
import {Root} from "remark-parse/lib";



function ingredientListNode(children) {
  return {
    ...{type: "ingredientList"},
    children
  }
}


function ingredientsProcessor() {

  return (tree)  => {
    return map(tree, (node) => {
      if (is(node, "code")) {
        return ingredientListNode(
          node.value.split("\n").map(row => {

            return listItem(text(row))
          }));
      }
      return node;
    });
  }
}

const parser = unified()
.use(remarkParse)
.use(ingredientsProcessor)

export const parse = md => {
  const tree = parser.runSync(parser.parse(md));
  return tree;
}

function mdToReact(markdown) {
  let mdast = parse(markdown);

  return renderMdast
}

export {mdToReact}


