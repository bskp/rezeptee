import {ingredientNode} from "./mdast-recipe";
import assert from "assert";

describe('Ingredient Node parsing', () => {
  it('Typographical Fractional Quantity', () => {
    const expected = {
      "children": [
        {
          "type": "quantity",
          "value": "3/4"
        },
        {
          "type": "unit",
          "value": "dl"
        },
        {
          "type": "text",
          "value": " Suppe"
        }
      ],
      "type": "listItem"
    }
    const mdast = ingredientNode("¾dl Suppe")
    assert.deepEqual(mdast, expected);
  });
  it('Fractional Quantity', () => {
    const expected = {
      "children": [
        {
          "type": "quantity",
          "value": "3/4"
        },
        {
          "type": "unit",
          "value": "dl"
        },
        {
          "type": "text",
          "value": " Suppe"
        }
      ],
      "type": "listItem"
    }
    const mdast = ingredientNode("3/4 dl Suppe")
    assert.deepEqual(mdast, expected);
  });

  it('No Quantities', () => {
    const expected = {
      "children": [
        {
          "type": "text",
          "value": "Hagelzucker"
        }
      ],
      "type": "listItem"
    }
    const mdast = ingredientNode("Hagelzucker")
    assert.deepEqual(mdast, expected);
  });

  it('Multitple Quantity per Row', () => {
    const mdast = ingredientNode("ca. 6-10 EL Zucker")
    const expected = {
      "type": "listItem",
      "children": [
        {
          "type": "text",
          "value": "ca. "
        },
        {
          "type": "quantity",
          "value": "6"
        },
        {
          "type": "text",
          "value": "-"
        },
        {
          "type": "quantity",
          "value": "10"
        },
        {
          "type": "unit",
          "value": "EL"
        },
        {
          "type": "text",
          "value": " Zucker"
        }
      ],
    }
    assert.deepEqual(mdast, expected);
  });
});
