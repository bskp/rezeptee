import {Random} from "meteor/random";
import {Node} from "unist";
import {getCollections, getIngredients, getTags, getTitle, parse} from "/imports/api/document";
import slug from 'slug';
import {Mongo} from "meteor/mongo";

const CURRENT_PARSER_VERSION = 0;

export class Rezept {
  // Set through instantiation / copy constructor
  markdown: string;
  _lineage: string = Random.id();

  // Set during parsing
  _parser_version: number;
  name: string;
  slug: string;
  mdast: Node;
  tagNames: string[];
  ingredientNames: string[];
  collections?: string[];

  // Set upon saving
  _id: string;
  active: boolean;
  previous_version_id: string;

  constructor(doc: Rezept) {
    // Set by server upon saving
    this.markdown = doc.markdown;
    this._lineage = doc._lineage ? doc._lineage : this._lineage;
    this.active = doc.active
    this.previous_version_id = doc.previous_version_id

    if (doc._parser_version == CURRENT_PARSER_VERSION) {
      this._parser_version = doc._parser_version
      this.name = doc.name
      this.slug = doc.slug
      this.mdast = doc.mdast
      this.tagNames = doc.tagNames
      this.ingredientNames = doc.ingredientNames
    } else {
      this._parse();
    }

    // @ts-ignore
    this._id = doc._id ? doc._id : undefined;
  }

  _parse() {
    this._parser_version = CURRENT_PARSER_VERSION;

    let mdast = parse(this.markdown);

    this.name = getTitle(mdast);
    this.slug = slug(this.name);
    this.mdast = mdast;
    this.tagNames = getTags(mdast)
    this.ingredientNames = getIngredients(mdast);
    this.collections = getCollections(mdast);
  }
}

export const Rezepte = new Mongo.Collection<Rezept>("rezepte", {
  transform(doc: Rezept) {
    return new Rezept(doc);
  }
});

