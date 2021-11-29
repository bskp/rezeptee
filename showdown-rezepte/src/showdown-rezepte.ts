/*
 * Parsing of recipes written in german, in classic or tabular style.
 *
 *
 * Tomaten-Sauce
 * =============
 *
 *     400g Pelati
 *     Salz
 *     Olivenöl
 *     Basilikum
 *     1 Knoblauchzehe
 *
 * 1.  Knoblauch fein hacken, in Olivenöl andünsten, ohne dass dieser
 *     viel Farbe annimmt.
 * 2.  Pelati dazugeben, 4h leicht köcheln lassen.
 * 3.  Mit Salz und evtl. Pfeffer abschmecken. Basilikum fein hacken,
 *     dazugeben, servieren.
 *
 *
 */
import {ShowdownExtension} from "showdown";

// Inline: tags
export const tags = {
  type: 'lang',
  regex: /^\s*(#(\S+) *)+\s*$/gm,
  replace: function (tags: string): string {
    return (
      '<ul class="tags">' +
      tags.replace(/\s*#([^\s:]+)\s*/g, (match: string, tag: string) => {
        return '\n    <li>' + tag + '</li>';
      }) +
      '\n</ul>'
    );
  }
}

// Block: Ingredient list
export const ingredient_list = {
  type: 'lang',
  regex: /\n\s*(\n( {2,}|	)[^\n]+)+\s*\n/g,
  replace: function (block: string): string {
    const wrap_quantity = function(text){
      return text.replace(/((?:\d+ )?[\d½¼¾⅓⅔]+[,\.\/]?\d*)/g, '<b contenteditable="true">$1</b>');
    }

    const wrap_ingredients = function(text){
      // Every noun is treated as an ingredient, if not matched by the
      // following expression:
      var no_ingredient = /Zweig|Zehe|Stück|Bl[aä]tt|Hand|Prise|Essl|Bund|Stange|P[äa]ck|Fl[aä]sch|EL|TL|D[öo]s/;
      return text.replace(/[A-ZÄÖÜ][a-zäöü]+/g, function(noun){
        if (noun.match(no_ingredient)){
          return noun;
        }
        return '<i>' + noun + '</i>';
      });
    }

    let rows = block.replace(/\n( {2,}|	)([^\n]+)/g, (match, space, row) => {
      row = wrap_ingredients(row);
      row = wrap_quantity(row);
      return '\n<li>' + row + '</li>';
    });
    return '\n<ul class="ingredients">' + rows + '</ul>';
  }
}

export const showdownRezepte: ShowdownExtensionExplicit[] = [ingredient_list, tags]

// Variadic Tuples. Noice :)
type little = [substring: string, ...p: string[]]
type all = [substring: string, ...p: string[], position: number, content: string]
type part = [substring: string, ...p: string[], position: number]

interface ShowdownExtensionExplicit extends ShowdownExtension {
  replace: (string | (((...a: little) => string) | ((...a: part) => string) | ((...a: all) => string)))
}






