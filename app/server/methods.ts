import {Meteor} from "meteor/meteor";
import { WebApp } from 'meteor/webapp';
import {CURRENT_PARSER_VERSION, parse, Rezepte, RezeptParsed} from "/imports/api/models/rezept";
import {Imgs} from "/imports/api/models/imgs";
import "./imgs-processing";

Meteor.publish('rezepte', (collectionName: string | null) =>
  (collectionName !== null && collectionName !== undefined) ?
    Rezepte.find({
      active: true,
      collections: collectionName
    })
    :
    Rezepte.find({
      active: true,
      $or: [
        {collections: {$exists: false}},
        {collections: {$size: 0}},
        {collections: 'global'}
      ]
    })
);

// Versionsverlauf eines einzelnen Rezepts. Bewusst eng geschnitten: früher
// wurden alle Versionen aller Rezepte an jeden Client geschickt.
Meteor.publish('rezeptVersions', function (lineage: string) {
  if (typeof lineage !== 'string' || lineage === '') {
    this.ready();
    return;
  }
  return Rezepte.find({_lineage: lineage});
});

Meteor.publish('files.imgs.all', () => Imgs.find().cursor);

Meteor.publish('spaces', async function () {
  const counts: {[key: string]: Set<string>} = {};

  const add = (id: string, collections?: string[]) => {
    if (collections?.length === 0) {
      collections = ['root'];
    }
    collections?.forEach(collection => {
      if (!Object.prototype.hasOwnProperty.call(counts, collection)) {
        counts[collection] = new Set();
        this.added('spaces', collection, {count: 0});
      }
      counts[collection].add(id)
      this.changed('spaces', collection, {count: counts[collection].size});
    });
  };

  const remove = (id: string) => {
    for (const collection in counts) {
      const idWasInCollection = counts[collection].delete(id);
      if (!idWasInCollection) {
        continue;
      }
      this.changed('spaces', collection, {count: counts[collection].size});

      if (counts[collection].size == 0) {
        delete counts[collection];
        this.removed('spaces', collection);
      }
    }
  };

  // observeChanges liefert unter Meteor 3 ein Promise — ohne await war
  // handle.stop() undefined und der Observer überlebte jedes Unsubscribe.
  const handle = await Rezepte.find({active: true}, {fields: {collections: 1}}).observeChanges({
    added(id, fields) {
      add(id, fields.collections);
    },
    changed(id, fields) {
      remove(id);
      add(id, fields.collections);
    },

    removed(id) {
      remove(id);
    }
  });

  this.onStop(() => handle.stop());
  this.ready();
});

Meteor.methods({

  async saveRezept(remoteObject: RezeptParsed) {
    const {mdast: _mdast, ...rezept} = parse(remoteObject);

    // Compare with stored Rezept versions
    // TODO: respect creation date
    const stored = await Rezepte.findOneAsync({_lineage: rezept._lineage, active: true});

    // Archive previous version
    if (stored !== undefined) {
      stored.active = false;
      rezept.previous_version_id = stored._id;
      await Rezepte.updateAsync(stored._id, stored);
    }

    if (rezept.markdown.trim() === "") {
      // That is the convention to delete a recipe. Skip creation of new & active version
      return undefined;
    }

    rezept.active = true;
    rezept.createdAt = new Date();
    // @ts-ignore
    delete rezept._id;  // Triggers creation of a new ID
    await Rezepte.insertAsync(rezept);

    return rezept.slug
  }
});

Meteor.startup(async function () {
  // @ts-ignore
  WebApp.addHtmlAttributeHook(() => ({ lang: 'de-CH' }));

  Rezepte.find({_parser_version: {$ne: CURRENT_PARSER_VERSION}, active: true}).forEach(async (r) => {
    const {mdast: _mdast, ...rezept} = parse(r);
    await Rezepte.updateAsync(rezept._id, rezept);
    console.log(`Re-parsed ${rezept.slug}`);
  });
});

