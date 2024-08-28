import {Meteor} from "meteor/meteor";
import {WebApp} from "meteor/webapp";
import {Rezept, Rezepte} from "/imports/api/models/rezept";
import {Imgs} from "/imports/api/models/imgs";

Meteor.publish('rezepte', (collection: string | null) =>
  (collection !== null && collection !== undefined) ?
    Rezepte.find({
      active: true,
      collections: {$in: [collection, 'global']}
    })
    :
    Rezepte.find({
      active: true,
      $or: [
        {collections: {$exists: false}},
        {collections: {$size: 0}},
        {collections: 'global'}
      ]
    }));

Meteor.publish('files.imgs.all', () => Imgs.find().cursor);

Meteor.startup(function () {
  WebApp.addHtmlAttributeHook(function () {
    return {
      "lang": "de"
    }
  })
});

Meteor.methods({

  saveRezept(remoteObject: Rezept) {
    let rezept = new Rezept(remoteObject); // Re-attach class methods
    rezept._parse();

    // Compare with stored Rezept versions
    // TODO: respect creation date
    let stored = Rezepte.findOne({_lineage: rezept._lineage, active: true});

    if (stored && stored.markdown == rezept.markdown) {
      // Handle parser evolution
      if (stored._parser_version != rezept._parser_version) {
        Rezepte.update(stored._id, rezept);
      }
    }

    // Archive previous version
    if (stored !== undefined) {
      stored.active = false;
      rezept.previous_version_id = stored._id;
      Rezepte.update(stored._id, stored);
    }

    // Add a new, active version - unless the recipe`s text is empty.
    // That is the convention to delete a recipe.
    if (rezept.markdown != "") {
      rezept.active = true;
      // @ts-ignore
      delete rezept._id;  // Triggers creation of a new ID
      Rezepte.insert(rezept);
    }

    return rezept?.slug
  }
});
