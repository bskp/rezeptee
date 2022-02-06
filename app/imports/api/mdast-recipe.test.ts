import {splitIngredients} from "./mdast-recipe";
import assert from "assert";

describe('Ingredient Node parsing', () => {
  it('Typographical Fractional Quantity', () => {
    const expected = [
      {
        "type": "quantity",
        "value": "3/4"
      },
      {
        "type": "unit",
        "value": "dl"
      },
      {
        "type": "ingredient",
        "value": "Suppe"
      }
    ]
    const mdast = splitIngredients("¾dl Suppe")
    assert.deepEqual(mdast, expected);
  });
  it('Fractional Quantity', () => {
    const expected = [
      {
        "type": "quantity",
        "value": "3/4"
      },
      {
        "type": "unit",
        "value": "dl"
      },
      {
        "type": "ingredient",
        "value": "Suppe"
      }
    ]
    const mdast = splitIngredients("3/4 dl Suppe")
    assert.deepEqual(mdast, expected);
  });

  it('Composed Typographical Fractional Quantity', () => {
    const expected = [
      {
        "type": "quantity",
        "value": "1 1/2"
      },
      {
        "type": "unit",
        "value": "EL"
      },
      {
        "type": "ingredient",
        "value": "Maisstärke"
      }
    ]
    const mdast = splitIngredients("1½ EL Maisstärke")
    assert.deepEqual(mdast, expected);
  });

  it('No Quantities', () => {
    const expected = [
      {
        "type": "ingredient",
        "value": "Hagelzucker"
      }
    ]
    const mdast = splitIngredients("Hagelzucker")
    assert.deepEqual(mdast, expected);
  });

  it('Word boundary after unit', () => {
    const expected = [
      {
        "type": "quantity",
        "value": "1"
      },
      {
        "type": "ingredient",
        "value": "kleine Tomate"
      }
    ]
    const mdast = splitIngredients("1 kleine Tomate")
    assert.deepEqual(mdast, expected);
  })

  it('Prosaic units', () => {
    const expected = [
      {
        "type": "quantity",
        "value": "1"
      },
      {
        "type": "unit",
        "value": "Dose"
      },
      {
        "type": "ingredient",
        "value": "Mais"
      }
    ]
    const mdast = splitIngredients("1 Dose Mais")
    assert.deepEqual(mdast, expected);
  })

  it('Multitple Quantities per Row', () => {
    const expected = [
      {
        "type": "text",
        "value": "ca."
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
        "type": "ingredient",
        "value": "Zucker"
      }
    ]
    const mdast = splitIngredients("ca. 6-10 EL Zucker")
    assert.deepEqual(mdast, expected);
  });
});
