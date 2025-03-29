// Builders for recipe-specific mdast nodes
// Inspired by https://github.com/mike-north/mdast-builder/blob/master/src/index.ts

import {Children} from "mdast-builder";
import {Literal, Node, Parent} from "unist";

function normalizeChildren(children?: Children): Node[] {
  if (Array.isArray(children)) {
    return children;
  } else if (typeof children === "function") {
    const res = children();
    return normalizeChildren(res);
  } else if (typeof children === "undefined") {
    return [];
  } else {
    return [children];
  }
}

const nodeWithChildren = (type: string, kids?: Children): Parent => ({
  type: type,
  children: normalizeChildren(kids)
});

const valueNode = <V>(type: string, value: V): Literal => ({
  type: type,
  value: value
});

export const ingredientListNode = (children: Children) => nodeWithChildren("ingredientList", children);
export const quantityNode = (value: string, dimension: number) => valueNode("quantity", {value: value, dimension: dimension});
export const unitNode = (value: string) => valueNode("unit", value);
export const ingredientNode = (value: string) => valueNode("ingredient", value);
export const tagNode = (value: string) => valueNode("tag", value);
export const collectionNode = (value: string) => valueNode("collection", value);
export const textNode = (value: string) => valueNode("text", value);
