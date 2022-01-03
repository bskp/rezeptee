// @ts-ignore
import {FileRef, FilesCollection} from 'meteor/ostrio:files';
import slug from 'slug'
import {Random} from 'meteor/random';
import {_} from "meteor/underscore";
import {Node} from "unist";
import {getIngredients, getTitle, parse} from "./document";
import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import fs from "fs";
import gm from "gm";

const tags = {
  whiteList: {
    a: ["href", "title"],
    span: ["class"],
    div: ["class", "id"],
    i: [],
    b: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    section: ["class", "id"],
    ul: ["class"],
    u: [],
    ol: [],
    li: [],
    p: ["class", "id"],
    br: [],
    strong: [],
    em: [],
    code: ["class"],
    s: [],
    pre: [],
    img: ["src", "alt"],
    abbr: ["class", "title", "data-fingers"]
  }
};


export class Rezept {
  // Set through instantiation / copy constructor
  markdown: string;
  _lineage: string = Random.id();

  // Set during parsing
  _parser_version: number;
  name: string;
  slug: string;
  mdast: Node;
  tagNames: Array<string>;
  ingredientNames: Array<string>;

  // Set upon saving
  _id: string;
  active: boolean;
  previous_version_id: string;

  constructor(doc: { markdown: string, _lineage?: string, _id?: string }) {
    this.markdown = doc.markdown;
    this._lineage = doc._lineage ? doc._lineage : this._lineage;
    // @ts-ignore
    this._id = doc._id ? doc._id : undefined;
    this._parse();
  }

  _parse() {
    this._parser_version = 0;

    let mdast = parse(this.markdown);

    this.name = getTitle(mdast);
    this.ingredientNames = getIngredients(mdast);
    this.tagNames = [];

    this.mdast = mdast;
    this.slug = slug(this.name);
  }
}

export class Tag {
  constructor(doc: object) {
    this._id = ''
    _.extend(this, doc);
  }

  _id?: string;
  name: string;
  color: string;
  description: string;

  containedIn(tagNames?: Array<string>): boolean {
    if (tagNames === undefined) return false;
    return tagNames.includes(this.name);
  }
}

export class Zutat {
  constructor(name: string) {
    name: name;
  }

  name: string;
  synonym: Array<string>;
}

let Rezepte = new Mongo.Collection<Rezept>("rezepte", {
  transform(doc: Rezept) {
    return new Rezept(doc);
  }
});
let Zutaten = new Mongo.Collection<Zutat>("zutaten");
let Tags = new Mongo.Collection<Tag>("tags", {
  transform(doc) {
    return new Tag(doc);
  }

});

const bound = Meteor.bindEnvironment((callback) => {
  return callback();
});


const createSizeVersion = function (img: FileRef<any>, version_label: string, transform: (i: gm.State) => gm.State) {
  const version_path = `${fs_storage}/${version_label}/${img._id}.${img.extension}`;

  transform(gm(img.path)).write(version_path, (err) => {
    fs.stat(version_path, (err, stats) => {
      bound(() => {
        let upd = {
          $set: {}
        };
        upd['$set']['versions.' + version_label] = {
          path: version_path,
          size: stats.size,
          type: img.type,
          name: img.name,
          extension: img.extension,
        };
        return Imgs.update(img._id, upd);
      });
    });
  });
}

let fs_storage = '/images';  // within docker container
if (Meteor.isDevelopment) {
  fs_storage = `${process.env.PWD}/images`;
}

const Imgs = new FilesCollection({
  debug: false,
  storagePath: fs_storage,
  permissions: 0o774,
  parentDirPermissions: 0o774,
  collectionName: 'imgs',
  allowClientCode: true, // Allow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024 * 1024 * 10 && /png|jpg|jpeg|heic/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  },
  onAfterUpload: function (file) {
    const image = gm(file.path);
    image.size((error, features) => {
      bound(() => {
        if (error) {
          console.error('size not readable', error);
          return;
        }

        // Update meta data if original image
        Imgs.collection.update(file._id, {
          $set: {
            'meta.width': features.width,
            'meta.height': features.height,
            'versions.original.meta.width': features.width,
            'versions.original.meta.height': features.height
          }
        });
        createSizeVersion(file, 'thumbnail', i => i.quality(90).resize('300>').gravity('Center'));
        createSizeVersion(file, 'full', i => i.quality(80).resize('1600>'));
      })
    }); // size + bound

  }
});

export {Rezepte, Imgs, Tags, Zutaten, createSizeVersion}
