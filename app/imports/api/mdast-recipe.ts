import {Node} from "unist";
import {text} from "mdast-builder";
import {ingredientNode, quantityNode, unitNode} from "./mdast-recipe-builders";
import {
  expandTypographicalFractions,
  insertTypographicalFractions
} from "/imports/api/quantityHelpers";


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
