import {map} from "unist-util-map";
import {is} from "unist-util-is";
import {ingredientListNode} from "/imports/api/mdast-recipe-builders";
import {Children, listItem} from "mdast-builder";
import {splitIngredients} from "/imports/api/mdast-recipe";
//import {tagList} from "/imports/api/tag-list";


export function remarkRecipe() {
  const data = this.data()

  add('micromarkExtensions', tagList())  // taglist from micromark-extension-recipe
  // add('micromarkExtensions', comments)  // comments from "
  add('fromMarkdownExtensions', recipeFromMarkdown) // recipeFromMarkdown from mdast-util-recipe

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

  /**
   * @param {string} field
   * @param {unknown} value
   */
  function add(field, value) {
    const list = /** @type {unknown[]} */ (
      // Other extensions
      /* c8 ignore next 2 */
      data[field] ? data[field] : (data[field] = [])
    )

    list.push(value)
  }
}


//////////

function enterTaglist(token) {
  this.enter({
    type: "list",
    ordered: "unordered",
    children: []
  }, token)
}

function exitTaglist(token) {
  this.exit(token);
}

function enterTag(token) {
  this.enter({
    type: 'listItem',
    children: []
  }, token)
}

function exitTag(token) {
  this.exit(token);
}

export const recipeFromMarkdown_ = {
  enter: {
    tagList: console.log,
    tag: console.log
  },
  exit: {
    tagList: console.log,
    tag: console.log
  }
}

export const recipeFromMarkdown = {
  enter: {
    tagList: enterTaglist,
    tag: enterTag
  },
  exit: {
    tagList: exitTaglist,
    tag: exitTag
  }
}
