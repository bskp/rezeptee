import {matchesSearchTerm, normalizeForSearch} from "./search";
import assert from "assert";

const rezept = (markdown: string, tagNames: string[] = []) =>
  ({tagNames, searchText: normalizeForSearch(markdown)});

const zwiebelkuchen = rezept(`Zwiebelkuchen
=============

#vegetarisch #Wähe

- 500g Zwiebeln
- 1dl Crème fraîche

Im Backofen bei 200° backen.`, ['vegetarisch', 'wähe']);

describe('Suche', () => {
  it('findet den Titel', () => {
    assert.ok(matchesSearchTerm(zwiebelkuchen, 'zwiebelkuchen'));
  });

  it('findet Zutaten', () => {
    assert.ok(matchesSearchTerm(zwiebelkuchen, 'zwiebeln'));
  });

  it('findet grossgeschriebene Wörter im Text', () => {
    assert.ok(matchesSearchTerm(zwiebelkuchen, 'backofen'));
    assert.ok(matchesSearchTerm(zwiebelkuchen, 'Backofen'));
  });

  it('ignoriert Akzente und Umlaute', () => {
    assert.ok(matchesSearchTerm(zwiebelkuchen, 'creme'));
    assert.ok(matchesSearchTerm(zwiebelkuchen, 'fraîche'));
    assert.ok(matchesSearchTerm(zwiebelkuchen, '#wahe'));
  });

  it('behandelt ß wie ss', () => {
    assert.ok(matchesSearchTerm(rezept('Grüße aus der Küche'), 'grusse'));
    assert.ok(matchesSearchTerm(rezept('Strasse'), 'straße'));
  });

  it('findet Tags exakt und als Präfix', () => {
    assert.ok(matchesSearchTerm(zwiebelkuchen, '#vegetarisch'));
    assert.ok(matchesSearchTerm(zwiebelkuchen, '#veg'));
  });

  it('findet Tags auch ohne Treffer im Text', () => {
    assert.ok(matchesSearchTerm(rezept('Rösti', ['meta']), '#meta'));
  });

  it('findet nichts, was nicht vorkommt', () => {
    assert.ok(!matchesSearchTerm(zwiebelkuchen, 'zimt'));
    assert.ok(!matchesSearchTerm(zwiebelkuchen, '#vegan'));
  });
});
