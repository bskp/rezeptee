import {_} from "meteor/underscore";
import {Mongo} from "meteor/mongo";

export class Tag {
  constructor(doc: object) {
    _.extend(this, doc);
  }

  _id?: string
  name: string
  usedIn: string[]
  collections?: string[]
}
export const Tags = new Mongo.Collection<Tag>("tags", {
  transform(doc) {
    return new Tag(doc);
  }

});
