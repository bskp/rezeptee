// @ts-ignore
import {FilesCollection} from 'meteor/ostrio:files';
import * as showdown from 'showdown'
import {showdownRezepte as rmd} from 'showdown-rezepte'
import {DOMParser} from 'xmldom'
import slug from 'slug'
import {FilterXSS} from 'xss';
import { Random } from 'meteor/random';
import { _ } from "meteor/underscore";

const options: XSS.IFilterXSSOptions = {
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

const converter = new showdown.Converter({
  extensions: [rmd],
  striketrough: true,
  ghCodeBlocks: true,
  smoothLivePreview: true
});

showdown.setOption("simpleLineBreaks", true);
showdown.setOption("smoothLivePreview", true);
showdown.setOption("simplifiedAutoLink", true);
showdown.setOption("openLinksInNewWindow", true);
const gm = require('gm');

export class Rezept {
  // Set through instantiation / copy constructor
  text: string;
  _lineage: string = Random.id();

  // Set during parsing
  _parser_version: number;
  name: string;
  slug: string;
  html: string;
  tagNames: Array<string>;
  ingredientNames: Array<Zutat>;

  // Set upon saving
  _id?: string;
  active: boolean;
  previous_version_id: string;

  constructor(doc) {
    this.text = doc.text;
    this._lineage = doc._lineage ? doc._lineage : this._lineage;
    this._parse();
  }

  private _parse() {
    this._parser_version = 0;

    // XSS filtering and Markdown parsing
    const filter = new FilterXSS(options)
    this.html = filter.process(converter.makeHtml(this.text));

    // Interpret HTML and populate fields
    const dom = new DOMParser().parseFromString(this.html, "text/html");
    if (dom === undefined) return;

    let h1 = dom.getElementsByTagName("h1");
    if (h1.length > 0) {
      this.name = h1[0].textContent;
    } else {
      this.name = '(Ohne Titel)';
    }

    this.slug = slug(this.name);
    this.tagNames = collectTags(dom);
    this.ingredientNames = collectIngredients(dom);

  }
}

function collectIngredients(dom) {
  let tags = [];
  for (let ul of dom.getElementsByTagName("ul")) {
    if (ul.getAttribute("class") != "ingredients") continue;

    for (let li of ul.getElementsByTagName("li")) {
      tags.push(li.textContent);
    }
  }
  return tags;
}

function collectTags(dom) {
  let tags = [];
  for (let ul of dom.getElementsByTagName("ul")) {
    if (ul.getAttribute("class") != "tags") continue;

    for (let li of ul.getElementsByTagName("li")) {
      tags.push(li.textContent);
    }
  }
  return tags;
}

export class Tag {
  constructor(doc : object) {
    this._id = ''
    _.extend(this, doc);
  }

  _id?: string;
  name: string;
  color: string;
  description: string;

  containedIn(tagNames?: Array<string>) : boolean {
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

let Rezepte = new Mongo.Collection<Rezept>("rezepte");
let Zutaten = new Mongo.Collection<Zutat>("zutaten");
let Tags = new Mongo.Collection<Tag>("tags", {
  transform(doc) {
    return new Tag(doc);
  }

});

const bound = Meteor.bindEnvironment((callback) => {
  return callback();
});


const createSizeVersion = function(img, version_label, transform) {
  let fs = require('fs')
  let version_path = Imgs.storagePath + '/' + version_label + '/' + img._id + '.' + img.extension;
  let writeStream = fs.createWriteStream(version_path);

  let readStream = transform(gm(img.path)).stream();

  // Once we have a file, then upload it to our new data storage
  readStream.on('end', () => {
    console.log(version_label + ' version of ' + img.name + ' done.');

    bound(() => {
      let upd = {
        $set: {}
      };
      upd['$set']['versions.' + version_label] = {
        path: version_path,
      };
      return Imgs.update(img._id, upd);
    });
  });

  readStream.pipe(writeStream);
}

let fs_storage = '/images';  // within docker container
if (Meteor.isDevelopment) {
  fs_storage = `${process.env.PWD}/../images`;
}

let Imgs = new FilesCollection({
  debug: false,
  storagePath: fs_storage,
  permissions: 0o774,
  parentDirPermissions: 0o774,
  collectionName: 'imgs',
  allowClientCode: true, // Allow remove files from Client
  onBeforeUpload: function(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024*1024*10 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
       return 'Please upload image, with size equal or less than 10MB';
    }
  },
  onAfterUpload: function(file) {
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
        createSizeVersion(file, 'thumbnail', i => i.quality(90).resize('300', '150^').gravity('Center').crop(300, 150));
        createSizeVersion(file, 'full', i => i.quality(80).resize('1600>'));
    })}); // size + bound

  }
});

export { Rezepte, Imgs, Tags, Zutaten }
