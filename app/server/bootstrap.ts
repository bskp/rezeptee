// if the database is empty on server start, create some sample data.

import { Meteor } from "meteor/meteor";
import {Rezept, Rezepte, Zutat, Zutaten} from "../imports/api/models";

Meteor.startup(function () {

  if (Rezepte.find().count() === 0) {
    let doc = {
      text: "#backen #vegi \n\nWahnsinn, diese Haptik: ~ \n\nNaan\n====\n\n    4 Personen\n\nGerechnet als Beilage. 2h.\n\n    2dl Wasser\n    1,8 dl Joghurt\n    1 Päckli Trockenhefe\n    500g Mehl\n    ½ TL Salz\n    ½ TL Öl\n    Butter\n    \n1. Alle Zutaten in einer [Küchenmaschine](http://google.com/images?query=bosch mum4) zu einem glatten Teig kneten. Recht feucht ist schon in Ordnung.\n2. Zugedeckt 1h gehen lassen\n3. Backofen auf 80° stellen, eine oder mehrere Bratpfannen auf mittlere Hitze stellen.\n4. Nun eins z'Kehr um:\n    - Etwa 1/10 des Teigs zu einem halbcentimeterdicken Fladen auswallen\n    - In der Pfanne ausbacken (das dauert zwei Minuten), dabei einmal wenden\n    - Mit Butter bestreichen\n    - Im Ofen warmstellen\n    \nDazu passt: Linsen, Knoblauch, irgend ein Curry…\n",
    };
    Rezepte.insert(new Rezept(doc))
  }
});
