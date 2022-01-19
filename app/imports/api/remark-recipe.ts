import {map} from "unist-util-map";
import {is} from "unist-util-is";
import {Literal, Node} from "unist"
import {commentNode, ingredientListNode, tagNode} from "/imports/api/mdast-recipe-builders";
import {Children, emphasis, listItem} from "mdast-builder";
import {splitIngredients} from "/imports/api/mdast-recipe";
//import {tagList} from "/imports/api/tag-list";
import type {Plugin, Transformer} from 'unified'
import {Code, Paragraph, Text, PhrasingContent} from 'mdast'

const remarkRecipe: Plugin = function () {
  const data = this.data()

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
            let tags : PhrasingContent[] = []
            for (let match of text.value.matchAll(/#?(\S+)($|\s)/g)) {
              tags.push( tagNode(match[1]) as PhrasingContent )
            }
            return tags
          } else if (text.value.match(/~ \w+\s*$/)) {
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

  function expandNestedArrays<Type>(nested : (Type | Type[])[] ): Type[] {
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
}

export default remarkRecipe
