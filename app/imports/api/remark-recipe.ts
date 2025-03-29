import {map} from "unist-util-map";
import {is} from "unist-util-is";
import {collectionNode, ingredientListNode, quantityNode, tagNode, textNode} from "./mdast-recipe-builders";
import {listItem} from "mdast-builder";
import {splitIngredients} from "./mdast-recipe";
import type {Plugin, Transformer} from 'unified'
import {Code, Paragraph, PhrasingContent, Text} from 'mdast'
import {expandTypographicalFractions} from "/imports/api/quantityHelpers";


const remarkRecipe: Plugin = function () {
  const data = this.data()

  // Disable ATX-Headers -- Hashes (#) are used for tags instead
  add('micromarkExtensions', {disable: {null: ['headingAtx']}})

  const transformer: Transformer = (tree) => {
    return map(tree, (node) => {
      if (is(node, "code")) {
        // Ingredients
        const rows = (node as Code).value.split("\n");
        return ingredientListNode(
          rows.map(row => listItem(splitIngredients(row)))
        )
      } else if (is(node, "paragraph")) {
        const par = node as Paragraph
        let children = par.children.flatMap(child => {
          if (!is(child, 'text')) return child
          const text = child as Text

          if (text.value.startsWith('#')) {
            // Tag
            return [[...text.value.matchAll(/#(\S+)/g)].map(match => tagNode(match[1]) as PhrasingContent)]
          }
          if (text.value.startsWith('@')) {
            // Collection assignment
            return [[...text.value.matchAll(/@(\S+)/g)].map(match => collectionNode(match[1]) as PhrasingContent)]
          }
          const regex = /([^$]+)(?:(\${1,3})(\d+(?: \d)?(?:[\/.,]\d+)?))?/g;
          return [...text.value.matchAll(regex)].map(([match, plaintext, dimension, number]) => {
            const contents = [textNode(plaintext) as PhrasingContent]
            if (number !== undefined) {
              contents.push(quantityNode(expandTypographicalFractions(number), dimension.length) as PhrasingContent);
            }
            return contents;
            }
          )
        });

        par.children = expandNestedArrays(children)
        return par
      }
      return node;
    });
  }
  return transformer

  function add(field, value) {
    const list = (
      data[field] ? data[field] : (data[field] = [])
    ) as unknown[]

    list.push(value)
  }
}

function expandNestedArrays<Type>(nested: (Type | Type[])[]): Type[] {
  let out: Type[] = []
  for (let slot of nested) {
    if (Array.isArray(slot)) {
      out = out.concat(slot)
    } else {
      out.push(slot)
    }
  }
  return out
}

export default remarkRecipe
