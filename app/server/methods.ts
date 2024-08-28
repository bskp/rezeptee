import {Meteor} from "meteor/meteor";
import {WebApp} from "meteor/webapp";
import {Rezept, Rezepte} from "/imports/api/models/rezept";
import {Tag, Tags} from "/imports/api/models/tag";
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

Meteor.publish('tags', () => Tags.find({usedIn: {$exists: true, $not: {$size: 0}}}));
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

    // Ensure each mentioned tag exists and is referred to.
    for (let usedTag of rezept.tagNames) {
      let presentTag = Tags.findOne({name: usedTag});
      if (presentTag == undefined) {
        // create new Tag in DB
        presentTag = new Tag({
          name: usedTag,
          description: "",
        })
        delete presentTag._id;  // Triggers creation of a new ID
        presentTag._id = Tags.insert(presentTag);
      }
      if (!presentTag.usedIn?.includes(rezept._lineage)) {
        // Amend missing recipe reference in Tag
        presentTag.usedIn = presentTag.usedIn ? presentTag.usedIn : []
        presentTag.usedIn.push(rezept._lineage);
      }

      Tags.update(presentTag._id, presentTag);
    }

    // Ensure references in Tags-DB: Is every single one still mentioned?
    Tags.find({usedIn: rezept._lineage}).forEach(tag => {
      if (rezept.tagNames.includes(tag.name)) return;
      tag.usedIn = tag.usedIn.filter(l => l != rezept._lineage)
      console.log("Removed reference to Tag " + tag.name)
      Tags.update(tag._id, tag)
    });

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
