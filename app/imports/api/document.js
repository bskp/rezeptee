import {unified} from "unified";
import {renderMdast} from 'mdast-react-render';
import remarkParse from "remark-parse";
import {is} from 'unist-util-is'
import {map} from "unist-util-map";
import find from "unist-util-find";
import {toString} from "mdast-util-to-string";
import {visit} from "unist-util-visit";
import {list, listItem} from "mdast-builder";
import {splitIngredients} from "/imports/api/mdast-recipe";
import {ingredientListNode} from "/imports/api/mdast-recipe-builders";
import flattenImageParagraphs from "mdast-flatten-image-paragraphs";


function ingredientsPlugin() {

  return (tree) => {
    return map(tree, (node) => {
      if (is(node, "code")) {
        const rows = node.value.split("\n");
        return ingredientListNode(
          rows.map(row => listItem(splitIngredients(row)))
        )
      }
      return node;
    });
  }
}

const parser = unified()
  .use(remarkParse)
  .use(ingredientsPlugin)
  .use(flattenImageParagraphs);

export const parse = md => {
  const mdast = parser.runSync(parser.parse(md));
  return mdast;
}

export function getTitle(mdast) {
  let h1 = find(mdast, {type: "heading", depth: 1});
  return toString(h1 || "(Ohne Titel)");
}

export function getIngredients(mdast) {
  let ingredients = [];
  visit(mdast, 'ingredient', node => {
    ingredients.push(toString(node));
  });
  return ingredients;
}


