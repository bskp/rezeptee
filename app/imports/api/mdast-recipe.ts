import {listItem, text} from "mdast-builder";
import {Node} from "unist";
import {quantityNode, unitNode} from "./mdast-recipe-builders";

function expandTypographicalFractions(text: string) {
  text = text.replace('½', ' 1/2');
  text = text.replace('¼', ' 1/4');
  text = text.replace('¾', ' 3/4');
  text = text.replace('⅓', ' 1/3');
  text = text.replace('⅔', ' 2/3');
  return text.trim();
}

export function ingredientNode(row: string) {
  row = expandTypographicalFractions(row);
  const matches = row.matchAll(/(\d+(?:\/\d+)?) *([TE]L|[kdcm]?[lg]?)/g);

  let children : Node[] = [];
  let consumed = 0;

  for (const match of matches) {
    let [all, quantity, unit] = match;
    const start = match.index || 0;
    if (start > consumed) {
      children.push(
        text(row.substring(consumed, start)) // "ca. "
      );
    }
    children.push(
      quantityNode(quantity) // "4"
    );
    if (unit) {
      children.push(
        unitNode(unit) // "EL"
      );
    }
    consumed = start + all.length;
  }
  children.push(
    text(row.substring(consumed))  // "Zucker"
  );

  return listItem(children);
}
