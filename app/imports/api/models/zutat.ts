import {Mongo} from "meteor/mongo";

export class Zutat {
  constructor(name: string) {
    name: name;
  }

  name: string;
  synonym: Array<string>;
}

export const Zutaten = new Mongo.Collection<Zutat>("zutaten");
