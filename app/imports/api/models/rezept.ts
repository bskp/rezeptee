import {Random} from "meteor/random";
import {Node} from "unist";
import {getCollections, getIngredients, getTags, getTitle, markdownToAst} from "/imports/api/document";
import slug from 'slug';
import {Mongo} from "meteor/mongo";

export const CURRENT_PARSER_VERSION = 1;

export type RezeptDraft = {
  markdown: string;
  _lineage: string;

  _parser_version: number;
  name: string;
  slug: string;
  tagNames: string[];
  ingredientNames: string[];
  collections?: string[];
}

export type RezeptStored = RezeptDraft & {
  _id: string;
  active: boolean;
  previous_version_id: string;
  createdAt?: Date;
}

export type RezeptParsed = RezeptStored & { mdast: Node }

export const parse = (rezept: RezeptStored): RezeptParsed => {
  const mdast = markdownToAst(rezept.markdown);
  const name = getTitle(mdast);
  return ({
    _id: rezept._id,
    active: rezept.active,
    previous_version_id: rezept.previous_version_id,
    createdAt: rezept.createdAt,
    markdown: rezept.markdown,
    _lineage: rezept._lineage ?? Random.id(),
    _parser_version: CURRENT_PARSER_VERSION,
    name,
    slug: slug(name),
    mdast: mdast,
    tagNames: getTags(mdast),
    ingredientNames: getIngredients(mdast),
    collections: getCollections(mdast)
  });
};

export const Rezepte = new Mongo.Collection<RezeptStored>("rezepte");
export const Spaces = new Mongo.Collection<{ _id: string, count: number }>("spaces");
