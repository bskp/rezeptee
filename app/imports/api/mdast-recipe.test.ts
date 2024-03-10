import {splitIngredients} from "./mdast-recipe";
import assert from "assert";

describe('Ingredient Node parsing', () => {
  it('Typographical Fractional Quantity', () => {
    const mdast = splitIngredients("¾dl Suppe")
    assert.deepEqual(mdast, [
      {
        "type": "quantity",
        "value": "¾"
      },
      {
        "type": "unit",
        "value": "dl "
      },
      {
        "type": "ingredient",
        "value": "Suppe"
      }
    ]);
  });

  it('Fractional Quantity', () => {
    const mdast = splitIngredients("3/4 dl Suppe")
    assert.deepEqual(mdast, [
      {
        "type": "quantity",
        "value": "¾"
      },
      {
        "type": "unit",
        "value": "dl "
      },
      {
        "type": "ingredient",
        "value": "Suppe"
      }
    ]);
  });

  it('Quantity with decimal comma', () => {
    const mdast = splitIngredients("1,4dl Milch")
    assert.deepEqual(mdast, [
      {
        "type": "quantity",
        "value": "1,4"
      },
      {
        "type": "unit",
        "value": "dl "
      },
      {
        "type": "ingredient",
        "value": "Milch"
      }
    ]);
  });

  it('Quantity with decimal point', () => {
    const mdast = splitIngredients("1.3dl Milch")
    assert.deepEqual(mdast, [
      {
        "type": "quantity",
        "value": "1.3"
      },
      {
        "type": "unit",
        "value": "dl "
      },
      {
        "type": "ingredient",
        "value": "Milch"
      }
    ]);
  });

  it('Composed Typographical Fractional Quantity', () => {
    const mdast = splitIngredients("1½ EL Maisstärke")
    assert.deepEqual(mdast, [
      {
        "type": "quantity",
        "value": "1½"
      },
      {
        "type": "unit",
        "value": "EL"
      },
      {
        "type": "ingredient",
        "value": "Maisstärke"
      }
    ]);
  });

  it('No Quantities', () => {
    const mdast = splitIngredients("Hagelzucker")
    assert.deepEqual(mdast, [
      {
        "type": "ingredient",
        "value": "Hagelzucker"
      }
    ]);
  });

  it('Word boundary after unit', () => {
    const mdast = splitIngredients("1 kleine Tomate")
    assert.deepEqual(mdast, [
      {
        "type": "quantity",
        "value": "1"
      },
      {
        "type": "ingredient",
        "value": "kleine Tomate"
      }
    ]);
  })

  it('Prosaic units', () => {
    const mdast = splitIngredients("1 Dose Mais")
    assert.deepEqual(mdast, [
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
    ]);
  })

  it('Prosaic units which start with SI prefixes', () => {
    const mdast = splitIngredients("8 dünne Plätzli")
    assert.deepEqual(mdast, [
      {
        "type": "quantity",
        "value": "8"
      },
      {
        "type": "unit",
        "value": ""
      },
      {
        "type": "ingredient",
        "value": "dünne Plätzli"
      }
    ]);
  })

  it('Multitple Quantities per Row', () => {
    const mdast = splitIngredients("ca. 6-10 EL Zucker")
    assert.deepEqual(mdast, [
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
    ]);
  });
});
