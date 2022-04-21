import {map} from "unist-util-map";
import {is} from "unist-util-is";
import {commentNode, ingredientListNode, tagNode} from "./mdast-recipe-builders";
import {listItem} from "mdast-builder";
import {splitIngredients} from "./mdast-recipe";
import type {Plugin, Transformer} from 'unified'
import {Code, Paragraph, PhrasingContent, Text} from 'mdast'


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
        let children = par.children.map(child => {
          if (!is(child, 'text')) return child
          let text = child as Text

          if (text.value.startsWith('#')) {
            // Tag
            let tags: PhrasingContent[] = []
            for (let match of text.value.matchAll(/#?(\S+)($|\s)/g)) {
              tags.push(tagNode(match[1]) as PhrasingContent)
            }
            return tags
          } else if (text.value.match(/~ ?\w*\s*$/)) {
            return commentNode(text.value) as PhrasingContent
          }
          return child
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
