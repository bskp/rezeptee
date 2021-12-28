import {Meteor} from "meteor/meteor";
import {Imgs, Rezepte, Rezept, Tag, Tags, Zutaten, Zutat} from "../imports/api/models";

Meteor.publish('rezepte', () => Rezepte.find({active: true}));
Meteor.publish('zutaten', () => Zutaten.find());
Meteor.publish('tags', () => Tags.find());
Meteor.publish('files.imgs.all', () => Imgs.find().cursor);

Meteor.methods({

  saveRezept(remoteObject: Object) {
    let rezept = new Rezept(remoteObject); // Re-attach class methods and perform parsing

    // Compare with stored Rezept versions
    // TODO: respect creation date
    let stored = Rezepte.findOne({_lineage: rezept._lineage, active: true});

    if (stored && stored.text == rezept.text) {
      // Handle parser evolution
      if (stored._parser_version != rezept._parser_version) {
        Rezepte.update(rezept._id, rezept);
      }
    }

    // Normalize referenced collection items
    /*
    rezept.tags = rezept.tags?.map(tag => {
      let storedTag = Tags.findOne({name: tag.name});
      if (storedTag !== undefined) {
        return storedTag;
      } else {
        Tags.insert(tag)
        return tag;
      }
    });

    rezept.ingredients = rezept.ingredients?.map(zutat => {
      // TODO include stemming and synomonyms
      let storedZutat = Zutaten.findOne({name: zutat.name});
      if (storedZutat !== undefined) {
        return storedZutat;
      } else {
        Zutaten.insert(zutat)
        return zutat;
      }
    });
     */

    // Archive previous version
    if (stored !== undefined) {
      stored.active = false;
      rezept.previous_version_id = stored._id;
    }

    // Add a new, active version - unless the recipe`s text is empty.
    // That is the convention to delete a recipe.
    if (rezept.text != "") {
      rezept.active = true;
      delete rezept._id;  // Triggers creation of a new ID
      Rezepte.insert(rezept);
    }

    Rezepte.update(stored._id, stored);
  }
});

// Serve images from "pretty" urls
/*
Picker.route('/:name/img/:img', function (params, req, res, next) {
  var r = Rezepte.findOne({url: params.name});
  var img_id = r && r.images && r.images[params.img];

  img = img_id && Imgs.findOne(img_id);
  if (img) {
    res.writeHeader(301, {Location: img.link('full')});
    res.end();
  } else {
    res.writeHeader(404);
    res.end();
  }
});



 */
