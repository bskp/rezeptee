export function expandTypographicalFractions(text: string) {
  text = text.replace('½', ' 1/2');
  text = text.replace('¼', ' 1/4');
  text = text.replace('¾', ' 3/4');
  text = text.replace('⅓', ' 1/3');
  text = text.replace('⅔', ' 2/3');
  return text.trim();
}

export function insertTypographicalFractions(text: string) {
  text = text.replace(/ ?\b1\/2\b/, '½');
  text = text.replace(/ ?\b1\/4\b/, '¼');
  text = text.replace(/ ?\b3\/4\b/, '¾');
  text = text.replace(/ ?\b1\/3\b/, '⅓');
  text = text.replace(/ ?\b2\/3\b/, '⅔');
  return text.trim();
}


export const conversions = `
kg = 1000 g
l = 10 dl
dl = 100 ml
EL = 3 KL
EL = 15 ml
Pfund = 500 g
Dutzend = 12
Kilo = kg
Bd = Bund
`
export const conversionLookup = {};

for (const match of conversions.matchAll(/(\w+) = (\d*) ?(\w+)?\n/g)) {
  let [ , coarseUnit, factorString=1, fineUnit=""] = match;
  let factor = Number(factorString);
  coarseUnit = coarseUnit.toLowerCase();
  fineUnit = fineUnit.toLowerCase();
  const ensure = unit => {
    if (!(unit in conversionLookup)) conversionLookup[unit] = {};
  }
  ensure(coarseUnit);
  ensure(fineUnit);
  conversionLookup[coarseUnit][fineUnit] = factor;
  conversionLookup[fineUnit][coarseUnit] = 1/factor;
}

export function parseFractionalNumber(expression : string) : number {
  expression = expandTypographicalFractions(expression)
  if (!expression.includes('/')) return Number.parseFloat(expression)

  const [prefix, denominator] = expression.split('/', 2)
  const [nominator, wholes="0"] = prefix.split(' ', 2).reverse()
  return Number.parseInt(wholes) + Number.parseInt(nominator, 10) / Number.parseInt(denominator, 10)
}

export function createFractionalNumber(number : number) : string {
  if (Number.isInteger(number)) return String(number);

  // Try to factorize with denominators from 2..4
  for (let denominator = 2; denominator <= 4; denominator++) {
    const error = (number*denominator)%1.0;
    if (error < 0.001) {
      let wholes = Math.floor(number)
      if (wholes > 10) continue
      if (wholes == 0) wholes = ''
      let nominator = Math.round(number*denominator) - wholes*denominator
      let text = `${wholes} ${nominator}/${denominator}`
      return insertTypographicalFractions(text)
    }
  }

  // No fraction found
  return number.toFixed(2).replace('.', ',');
}
