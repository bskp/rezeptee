import {unified} from "unified";
import remarkParse from "remark-parse";
import find from "unist-util-find";
import {toString} from "mdast-util-to-string";
import {visit} from "unist-util-visit";
import remarkRecipe from "./remark-recipe.ts";

const parser = unified()
  .use(remarkParse)
  .use(remarkRecipe)

export const parse = md => {
  const mdast = parser.runSync(parser.parse(md));
  return mdast;
}

export function getTitle(mdast) {
  let h1 = find(mdast, {type: "heading", depth: 1});
  return toString(h1 || "(Ohne Titel)");
}

export function getTags(mdast) {
  let tags = [];
  visit(mdast, 'tag', node => {
    tags.push(toString(node).toLowerCase());
  });
  return tags;
}

export function getIngredients(mdast) {
  let ingredients = [];
  visit(mdast, 'ingredient', node => {
    ingredients.push(toString(node).toLowerCase());
  });
  return ingredients;
}


