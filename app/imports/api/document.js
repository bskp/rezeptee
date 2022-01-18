import {unified} from "unified";
import remarkParse from "remark-parse";
import find from "unist-util-find";
import {toString} from "mdast-util-to-string";
import {visit} from "unist-util-visit";
import flattenImageParagraphs from "mdast-flatten-image-paragraphs";
import {remarkRecipe} from "/imports/api/remark-recipe";


const parser = unified()
  .use(remarkParse)
  .use(remarkRecipe)
  .use(flattenImageParagraphs);

export const parse = md => {
  const mdast = parser.runSync(parser.parse(md));
  console.log(mdast);
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


