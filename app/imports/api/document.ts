import {unified} from "unified";
import remarkParse from "remark-parse";
import find from "unist-util-find";
import {toString} from "mdast-util-to-string";
import {visit} from "unist-util-visit";
import remarkRecipe from "./remark-recipe";

const parser = unified()
  .use(remarkParse)
  .use(remarkRecipe);

export const markdownToAst = (md: string) => {
  return parser.runSync(parser.parse(md));
};

export function getTitle(mdast) {
  const h1 = find(mdast, {type: "heading", depth: 1});
  return h1 ? toString(h1) : "(Ohne Titel)";
}

export function getTags(mdast) {
  const tags: string[] = [];
  visit(mdast, "tag", (node) => {
    tags.push(toString(node).toLowerCase());
  });
  return tags;
}

export function getCollections(mdast) {
  const collections: string[] = [];
  visit(mdast, "collection", (node) => {
    collections.push(toString(node).toLowerCase());
  });
  return collections;
}

export function getIngredients(mdast) {
  const ingredients: string[] = [];
  visit(mdast, "ingredient", (node) => {
    ingredients.push(toString(node).toLowerCase());
  });
  return ingredients;
}

