// Gross-/Kleinschreibung und Akzente spielen beim Suchen keine Rolle:
// «creme» findet «Crème», «strasse» findet «Straße».
export function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replaceAll('ß', 'ss');
}

export type Searchable = {
  tagNames: string[];
  // Das ganze Markdown, mit normalizeForSearch aufbereitet. Titel und Zutaten
  // stecken darin mit drin.
  searchText: string;
}

// Tags stehen als «#tag» im Text, «#veg» findet darum schon beim Tippen
// «#vegetarisch».
export function matchesSearchTerm(rezept: Searchable, term: string): boolean {
  if (term.startsWith("#") && rezept.tagNames.includes(term.substring(1).toLowerCase())) return true;
  return rezept.searchText.includes(normalizeForSearch(term));
}
