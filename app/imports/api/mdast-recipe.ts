import {Node} from "unist";
import {text} from "mdast-builder";
import {ingredientNode, quantityNode, unitNode} from "./mdast-recipe-builders";

function expandTypographicalFractions(text: string) {
  text = text.replace('½', ' 1/2');
  text = text.replace('¼', ' 1/4');
  text = text.replace('¾', ' 3/4');
  text = text.replace('⅓', ' 1/3');
  text = text.replace('⅔', ' 2/3');
  return text.trim();
}

function insertTypographicalFractions(text: string) {
  text = text.replace(/\b1\/2\b/, '½');
  text = text.replace(/\b1\/4\b/, '¼');
  text = text.replace(/\b3\/4\b/, '¾');
  text = text.replace(/\b1\/3\b/, '⅓');
  text = text.replace(/\b2\/3\b/, '⅔');
  return text.trim();
}

const conversions = `
kg = 1000 g
l = 10 dl
dl = 100 ml
EL = 3 KL
EL = 15 ml
Dose = 400 g
Pfund = 500 g
`
const conversionLookup = {};
for (const match of conversions.matchAll(/(\w+) = (\d+) ?(\w+)\n/g)) {
  const [all, coarseUnit, factorString, fineUnit] = match;
  let factor = Number(factorString);
  const ensure = unit => {
    if (!(unit in conversionLookup)) conversionLookup[unit] = {};
  }
  ensure(coarseUnit);
  ensure(fineUnit);
  conversionLookup[coarseUnit][fineUnit] = factor;
  conversionLookup[fineUnit][coarseUnit] = 1/factor;
}


export function splitIngredients(row: string) {
  row = expandTypographicalFractions(row);
  const matches = row.matchAll(/(\d+(?:\/\d+)?) *(Pfund|Dose|Bund|Bd|[KTE]L|[kdcm]?[lg]?\b)/g);

  let children : Node[] = [];
  let consumed = 0;

  for (const match of matches) {
    let [all, quantity, unit] = match;
    const start = match.index || 0;
    if (start > consumed) {
      children.push(
        text(row.substring(consumed, start).trim()) // "ca. "
      );
    }
    children.push(
      quantityNode(insertTypographicalFractions(quantity)) // "4"
    );
    if (unit) {
      children.push(
        unitNode(unit) // "EL"
      );
    }
    consumed = start + all.length;
  }
  children.push(
    ingredientNode(row.substring(consumed).trim())  // "Zucker"
  );

  return children;
}
