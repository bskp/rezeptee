import {Meteor} from "meteor/meteor";
import {CURRENT_PARSER_VERSION, parse, Rezepte, RezeptParsed} from "/imports/api/models/rezept";
import {Imgs} from "/imports/api/models/imgs";
// @ts-ignore
import {ReactiveAggregate} from 'meteor/jcbernack:reactive-aggregate';

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

Meteor.publish('rezepteVersions', (collectionName: string | null) =>
  (collectionName !== null && collectionName !== undefined) ?
    Rezepte.find({
      collections: collectionName
    })
    :
    Rezepte.find({
      $or: [
        {collections: {$exists: false}},
        {collections: {$size: 0}},
        {collections: 'global'}
      ]
    })
);

Meteor.publish('files.imgs.all', () => Imgs.find().cursor);

Meteor.publish("spacesStats", function () {
  ReactiveAggregate(this, Rezepte, [
    {
      $match: {active: true}
    },
    {
      $addFields: {
        collections: {
          $cond: {
            if: {$eq: ["$collections", []]},
            then: ["root"],
            else: "$collections"
          }
        }
      }
    },
    {
      $unwind: "$collections"
    },
    {
      $group: {
        _id: "$collections",
        count: {$sum: 1}
      }
    }
  ], {clientCollection: "spaces"});
});

Meteor.methods({

  saveRezept(remoteObject: RezeptParsed) {
    const {mdast, ...rezept} = parse(remoteObject);

    // Compare with stored Rezept versions
    // TODO: respect creation date
    let stored = Rezepte.findOne({_lineage: rezept._lineage, active: true});

    // Archive previous version
    if (stored !== undefined) {
      stored.active = false;
      rezept.previous_version_id = stored._id;
      Rezepte.update(stored._id, stored);
    }

    if (rezept.markdown === "") {
      // That is the convention to delete a recipe. Skip creation of new & active version
      return undefined;
    }

    rezept.active = true;
    rezept.createdAt = new Date();
    // @ts-ignore
    delete rezept._id;  // Triggers creation of a new ID
    Rezepte.insert(rezept);

    return rezept.slug
  }
});

Meteor.startup(function () {
  Rezepte.find({_parser_version: {$ne: CURRENT_PARSER_VERSION}, active: true}).forEach((r) => {
    const {mdast, ...rezept} = parse(r);
    Rezepte.update(rezept._id, rezept);
    console.log(`Re-parsed ${rezept.slug}`);
  });
});

