// if the database is empty on server start, create some sample data.

import {Meteor} from "meteor/meteor";
import {Rezept, Rezepte} from "/imports/api/models/rezept";

export const backup = [
  {
    "_id": "2JvrX7R9KiCtkkrrM",
    "name": "Naan",
    "url": "naan",
    "text": "#backen #vegi \n\nWahnsinn, diese Haptik: ~ \n\nNaan\n====\n\n    4 Personen\n\nGerechnet als Beilage. 2h.\n\n    2dl Wasser\n    1,8 dl Joghurt\n    1 Päckli Trockenhefe\n    500g Mehl\n    ½ TL Salz\n    ½ TL Öl\n    Butter\n    \n1. Alle Zutaten in einer [Küchenmaschine](http://google.com/images?query=bosch mum4) zu einem glatten Teig kneten. Recht feucht ist schon in Ordnung.\n2. Zugedeckt 1h gehen lassen\n3. Backofen auf 80° stellen, eine oder mehrere Bratpfannen auf mittlere Hitze stellen.\n4. Nun eins z'Kehr um:\n    - Etwa 1/10 des Teigs zu einem halbcentimeterdicken Fladen auswallen\n    - In der Pfanne ausbacken (das dauert zwei Minuten), dabei einmal wenden\n    - Mit Butter bestreichen\n    - Im Ofen warmstellen\n    \nDazu passt: Linsen, Knoblauch, irgend ein Curry…<br>",
    "tags": [
      "backen",
      "vegi"
    ],
    "ingr": [
      "personen",
      "wasser",
      "joghurt",
      "trockenhefe",
      "mehl",
      "salz",
      "öl",
      "butter"
    ]
  },
  {
    "_id": "2uKQQHmB84x8KNxkH",
    "name": "Kartoffotto mit Hacktätschli",
    "url": "kartoffotto-mit-hacktatschli",
    "text": "#anti-pasta #hauptgang #mamaroggo\n\nDas Wort \"Kartoffotto\" treibt mich in den Wahnsinn. Trotzdem: ~\n\nKartoffotto mit Hacktätschli\n============================\n\n    4 Personen\n    \nCa eine Stunde.\n\nHacktätschli\n------------\n\n    500g Hackfleisch\n    100g Schinken\n    1 Bund Peterling\n    1 Ei\n    Salz und Pfeffer\n    1 TL Fenchelsamen\n    \n1. Schinken in Streifen schneiden und Peterling fein hacken. Fenchelsamen im Mörser zerdrücken.\n2. Ei verquirlen, alles vermengen und mit Salz und Pfeffer würzen.\n3. Zu kleinen Kugeln formen und den den Kartoffotto angehen:\n\nKartoffotto\n-----------\n\n    1 Zwiebel\n    1 Knoblauchzehe\n    1 Bund Petersilie\n    250g Petersilienwurzel\n    1kg Kartoffeln, festkochend\n    Butter\n    5 dl Gemüsebuillon\n    50g Parmesan\n\n1. Zwiebel, Knoblauch und Petersilie fein hacken. Petersilienwurzel und Kartoffeln schälen und klein würfeln. \n2. Zwiebel und Knoblauch in Öl und Pfanne andünsten. Petersilienwurzel zugeben.\n3. Nach ein paar Minuten die Kartoffeln und Buillon zugeben und 15 Minuten weich kochen.\n4. In der Zwischenzeit die Hacktätschli in einer beschichteten Pfanne 8 Minuten anbraten.\n\n",
    "tags": [
      "anti-pasta",
      "hauptgang",
      "mamaroggo"
    ],
    "ingr": [
      "personen",
      "hackfleisch",
      "schinken",
      "peterling",
      "ei",
      "salz",
      "pfeffer",
      "fenchelsamen",
      "zwiebel",
      "knoblauchzehe",
      "petersilie",
      "petersilienwurzel",
      "kartoffeln",
      "butter",
      "gemüsebuillon",
      "parmesan"
    ],
    "images": {
      "hangover": "ErdhbzNxgZN3W4dQ9"
    }
  },
  {
    "_id": "3Cr4cAPjLxsjfMHzg",
    "name": "Ramen (ラーメン)",
    "url": "ramen",
    "text": "Ramen (ラーメン)\n=====\n\n#skizze #hauptgang\n\n![](ramen/img/engelberg-2019-186)\n\nNatriumkarbonat (Jiăn)\n---------------\n\n    Natrium*bi*carbonat\n    \nBei 150°C für 1h backen: _Bi_ (NaHCO3) reduziert sich zu _mono_ (Na2CO3) und das Gewicht um ca. ⅓. Vor Feuchtigkeit schützen.  \n\n    \nNudeln\n------\n\n\n    1kg Weizenmehl\n    20g Gluten\n    5g Sojamehl\n    400g Wasser\n    10g Salz\n    8g Natriumkarbonat\n    \n![](ramen/img/engelberg-2019-179)\n    \n1. Trockenes vermischen, Wasser dazu\n2. Der Teig wird am trockenen Ende von knetbar sein. Etwas liegen lassen hilft\n3. Fertig geknetet kann der Teig von der Pastawalze werden\n4. Nudeln formen, leicht bemehlen und zu Portionen formen\n\n\nBrühe\n-----\n\n(Knochenbrühe)\n\n\nSauce (Tare)\n------------\n\n(Knoblauch, Chili, etc)\n\n\nÖl\n--\n\nDas ist bloss eine von vielen Varianten, \"Mayu\":\n\n    4 EL Rapsöl\n    10 Zehen Knoblauch\n    4 EL Sesamöl\n    \n![](ramen/img/engelberg-2019-181)\n\n1. Knoblauch rüsten und grob hacken.\n2. In Rapsöl bräunen (mittlere Hitze)\n3. Hitze reduzieren und weiterdünsten bis schwarz\n4. Evtl. ein Teil des Knoblauchs entfernen und mixen bis glatt\n5. Sesamöl dazugeben\n\nAssemblage\n----------\n\n![](ramen/img/engelberg-2019-183)\n![](ramen/img/engelberg-2019-185)\n![](ramen/img/dsc_0036)\n\nOriginale\n---------\n\n- [Bake the Baking Soda](https://www.nytimes.com/2010/09/15/dining/15curious.html)\n- [Nudelteig-Tabelle](https://docs.google.com/spreadsheets/d/12uoNt8Hmzb0Iou6l7NlXxH4qCxm5SXj_L2KRyvtsgwY/edit#gid=920866641)\n- [Black Garlic Oil](https://www.seriouseats.com/recipes/2013/09/mayu-black-garlic-oil-for-ramen-recipe.html)\n\n\n\n\n",
    "tags": [
      "skizze",
      "hauptgang"
    ],
    "ingr": [
      "natrium",
      "weizenmehl",
      "gluten",
      "sojamehl",
      "wasser",
      "salz",
      "natriumkarbonat",
      "rapsöl",
      "knoblauch",
      "sesamöl"
    ],
    "images": {
      "dsc_0035": "gBGRD6hvzpeWMKAxf",
      "engelberg-2019-186": "A2Dwi4dcniNcqovCY",
      "engelberg-2019-183": "CFrPYSkhShx5Qkgci",
      "engelberg-2019-181": "5uJ8oCefwDGBMwdNs",
      "engelberg-2019-179": "soEcPNAetDcAzRKY7",
      "engelberg-2019-185": "mAwcYhsr5HrCJksxj",
      "dsc_0036": "7dA9Tif9nmsGzKZdd"
    }
  },
  {
    "_id": "3kwNW4R3iSeGbN9Sp",
    "name": "Versunkener Rhabarber",
    "url": "versunkener-rhabarber",
    "text": "#backen #imvoraus\n\nVersunkener Rhabarber\n=====================\n\n    750g Rhabarber\n    150g Butter\n    150g Zucker\n    1 Päckchen Vanillezucker\n    4 Eier\n    150g Mehl\n    1 TL Backpulver\n    Puderzucker\n    \n![](versunkener-rhabarber/img/img_0108)\n    \n1. Rhabarber rüsten und in ca. 3cm lange Stücke schneiden, allfällige Baumstämme spalten.\n2. Butter weich und luftig rühren.\n3. Zucker, Vanillezucker und dann Ei um Ei zugeben.\n4. Mehl und Backpulver vermischen und darunterziehen.\n5. Teig in Springform (~24 cm) streichen und Rhabarberstücke hineinstecken; sie sollen noch einen Zenti herausragen.\n6. 45 Minuten bei 200 Grad backen.",
    "tags": [
      "backen",
      "imvoraus"
    ],
    "ingr": [
      "rhabarber",
      "butter",
      "zucker",
      "vanillezucker",
      "eier",
      "mehl",
      "backpulver",
      "puderzucker"
    ],
    "images": {
      "img_0108": "uoMQb6bvH6dKw62eK"
    }
  },
  {
    "_id": "4DhuLXQom55kws7F6",
    "name": "Cantucci",
    "text": "#backen\n\nCantucci\n========\n\n    175g Mandeln\n    250g Mehl\n    180g Zucker\n    1 TL Backpulver\n    2 Pk. Vanillezucker\n    1 Flasche Bittermandelöl\n    1 Prise Salz\n    25g Butter\n    2 Eier\n\n1. Ofen auf 200° vorheizen. Alles Staubige vermischen, dann das Nasse dazu: Ein klebriger Knetteig entsteht.\n2. Diesen auf einem Backpapier zu Würsten formen und 15 Minuten vorbacken.\n3. Rausnehmen, etwas kühlen lassen\nund in Scheibchen schneiden.\n4. Die Cantucci während 10 Minuten im Ofen fertig rösten.",
    "tags": [
      "backen"
    ],
    "ingr": [
      "mandeln",
      "mehl",
      "zucker",
      "backpulver",
      "pk",
      "vanillezucker",
      "bittermandelöl",
      "salz",
      "butter",
      "eier"
    ],
    "url": "cantucci"
  },
  {
    "_id": "4F4Cz5sJBcstcPoE8",
    "name": "Teriyaki-Lachs",
    "text": "Hip weil Japan. Kudos an Andreas. ~\n\nTeriyaki-Lachs\n==============\n\n#chic #fisch #laktosefrei #mengenlos\n\n1 h. Reis dazu und gut. Der Lachs kann ziehen, während der Fenchel schon herumschmort.\n\n\nLachs\n-----\n\n    Soja-Sauce\n    Mirin (oder Sherry)\n    Zucker\n    Ingwer\n    \n1. Soja-Sauce, Mirin und Zucker zu gleichen Teilen mischen. Ingwer reiben und zugeben. Lachs abspülen, abtupfen und darin marinieren.\n2. Ein gutes Weilchen später den Lachs rausnehmen, abtupfen und scharf anbraten. Er muss dann auch nicht durch sein, bloss schön beröstet.\n3. Mit dem Rest der Teriyaki-Sauce ablöschen, Hitze reduzieren, einköcheln lassen.\n4. Lachs servieren, sobald er innen glasig ist – sonst wird er furztrocken. Bis dahin falls nötig Wasser zur Sauce geben, damit diese nicht karamellisiert.\n\nFenchel\n-------\n\n    1 Fenchel pro Person\n    Bratbutter\n    Salz\n    \n1. Fenchel in dünne Scheiben schneiden. Mit Bratbutter bei mittlerer Hitze anbraten. Salzen.\n2. Der Fenchel fällt zusammen. Wird aber, mit etwas Geduld, noch viel mehr als bloss gar: Je mehr Wasser verdunstet ist, umso röstiger wird er und beginnt fantastisch zu riechen (dauert vielleicht eine halbe Stunde).\n\nBeim Zucker echt nicht geizen. Sollte leicht dickflüssig werden. Zudem habe ich den nicht vorhandenen Mirin mit Martini ersetzt. Dafür komme ich sicher in die Kulturverständigungshölle ~mr",
    "tags": [
      "chic",
      "fisch",
      "laktosefrei",
      "mengenlos"
    ],
    "ingr": [
      "soja",
      "sauce",
      "mirin",
      "sherry",
      "zucker",
      "ingwer",
      "fenchel",
      "person",
      "bratbutter",
      "salz"
    ],
    "url": "teriyaki-lachs"
  },
  {
    "_id": "5GfgnCEWcLE3Rii2d",
    "name": "_Todo",
    "url": "_todo",
    "text": "_Todo\n=====\n\n- Autocompletion fürs Suchfeld\n- rechtsklick auf der ganzen Seite möglich\n- geste für touch-geräte anstatt rechtsklick\n- die Schwester in Zürich besuchen :)",
    "tags": [],
    "ingr": []
  },
  {
    "_id": "6ZRPQ75ADLgxkAPbR",
    "name": "Spätzli & Wirz",
    "text": "Süss, rahmig und doch keins von diesen Dessert-Znachts ~\n#vegi #chic #hauptgang\n\nSpätzli & Wirz\n==============\n\nFür 4 Personen. 1 h zubereiten, 1/2 h Teig ruhen lassen.\n\nTeig\n----\n\n    400g Mehl\n    1 TL Salz\n    4 Eier\n    2 dl Wasser\n    2 EL Mohnsamen, geröstet\n    Bratbutter\n\n1. Mehl und Salz mischen. Eier und Wasser unter Rühren zum Mehl geben. Teig klopfen, bis er glatt ist und Blasen wirft. Mohn darunterrühren, 30 min ruhen lassen.\n\n2. Teig vom Brett/Spätzlisieb/Spätzlipresse in kochendes Salzwasser geben, ziehen lassen. Wenn alle Spätzli an der Oberfläche sind, herausnehmen, abtropfen lassen.\n\n3. Erst kurz vorm Essen: Spätzli allenfalls anbraten.\n\n\nWirz\n----\n\n    1-2 rote Zwiebeln\n    500g Wirz in Streifen\n    Gemüsebuillon\n    2 Äpfel\n    2 EL Cranberries\n    150g Frischkäse\n    Salz, Pfeffer\n    Kümmel\n\n1. Zwiebeln und Wirz in Butter andämpfen, mit Buillon ablöschen. Bei kleiner Hitze 20 min köcheln.\n2. 5 min vor Schluss Frischkäse, Äpfel und Cranberries dazugeben, abschmecken.\n\n\nDie Spätzlipresse von Inge ist nun also auch mal zum Einsatz gekommen ~mr\n",
    "tags": [
      "vegi",
      "chic",
      "hauptgang"
    ],
    "ingr": [
      "mehl",
      "salz",
      "eier",
      "wasser",
      "mohnsamen",
      "bratbutter",
      "zwiebeln",
      "wirz",
      "streifen",
      "gemüsebuillon",
      "äpfel",
      "cranberries",
      "frischkäse",
      "salz",
      "pfeffer",
      "kümmel"
    ],
    "url": "spatzli-wirz",
    "images": {}
  },
  {
    "_id": "8aPcrG7ML6pDNwo8a",
    "name": "Gelberbsen-Suppe mit Rippli",
    "url": "gelberbsen-suppe-mit-rippli",
    "text": "Währschafte Küche auf den letzten Drücker ~\n#suppe #fleisch #imvoraus #laktosefrei\n\nGelberbsen-Suppe mit Rippli\n===========\n\n    500g Gelberbsen gespalten\n    1 kleiner Lauch\n    200g geräuchertes Rippli\n    Peterling\n    Bouillon\n    \n1. Rippli würfel und mit den Gelberbsen und dem Lauch im Dampfkochtopf garen. Dauert ca. 10 Minuten.\n2. Bouillon und Peterling zugeben.\n3. Einen Teil abschöpfen, diesen mit dem Mixer pürieren und zurückgeben.\n\nIch glaube, Knoblauch könnte hier noch passen. Ausprobiert hab ichs aber noch nicht. ~ mr",
    "tags": [
      "suppe",
      "fleisch",
      "imvoraus",
      "laktosefrei"
    ],
    "ingr": [
      "gelberbsen",
      "lauch",
      "rippli",
      "peterling",
      "bouillon"
    ]
  },
  {
    "_id": "92PGtbxARzzAMc6zm",
    "name": "Parpardelle mit Spinat",
    "text": "Parpardelle mit Spinat\n======================\n\n#vegi #hauptgang #schnell\n\n    Für 4 Personen.\n\nSchnell, fettig, fein.\n\n    400g Spinat\n    2 Knoblauchzehen \n    150g Mascarpone\n    ½ Muskatnuss\n    120g Parmesan\n    2dl Rahm\n    500g Papardelle\n    Butter, Olivenöl\n    Salz, Pfeffer\n    \n1. Knoblauch hacken, in Öl und Butter andünsten. Spinat zugeben und zusammenfallen lassen.\n2. Rahm, Mascarpone und geriebene Muskatnuss zugeben.\n3. Die Teigwaren kochen.\n4. Sauce mit Salz und Pfeffer abschmecken. Parmesan kurz vor dem Servieren reinmischen (dann zieht der auch keine Fäden).\n\nIst mit frischem Spinat schneller gekocht als mit gefrorenem. ~ mr",
    "tags": [
      "vegi",
      "hauptgang",
      "schnell"
    ],
    "ingr": [
      "für",
      "personen",
      "spinat",
      "knoblauchzehen",
      "mascarpone",
      "muskatnuss",
      "parmesan",
      "rahm",
      "papardelle",
      "butter",
      "olivenöl",
      "salz",
      "pfeffer"
    ],
    "url": "parpardelle-mit-spinat"
  },
  {
    "_id": "9PBv6kd9Jtjc5N3mx",
    "name": "Gifferstee",
    "text": "#getränk #mamaroggo\n\nGifferstee\n==========\n\n    12 l Wasser\n    6 Zimtstange\n    12 Anissterne\n    18 Teebeutel Hagebutten\n    4 Handvoll Lindenblüten\n    18 leicht gehäufte EL Zucker\n    \n1. Wasser, Zimt und Anis zusammen aufkochen. Damit's nicht bitter wird, nicht länger als 5 min. kochen lassen.\n2. Hagebutten, Lindenblüten und Zucker beigeben, ziehen lassen.\n\n\nZucker durch Kandiszucker ersetzen: gibt eine tolle Farbe ~ms",
    "tags": [
      "getränk",
      "mamaroggo"
    ],
    "ingr": [
      "wasser",
      "zimtstange",
      "anissterne",
      "teebeutel",
      "hagebutten",
      "lindenblüten",
      "zucker"
    ],
    "url": "gifferstee",
    "images": {}
  },
  {
    "_id": "9mfJQ85bynjcDb7YK",
    "name": "Spaghetti alle Cozze in Bianco",
    "url": "spaghetti-alle-cozze-in-bianco",
    "text": "#fisch #schnell #chic #hauptgang #laktosefrei\n\nSpaghetti alle Cozze in Bianco\n==============================\n\n    Für 4 Personen.\n\nFertig in 20 min.\n\n    1kg Miesmuscheln\n    2 Knoblauchzehen\n    1dl Weisswein\n    1dl Olivenöl\n    Petersilie\n    ½ kg Spaghetti\n    Salz, Pfeffer\n\n![](spaghetti-alle-cozze-in-bianco/img/pfanne)\n\n1. Erste Knoblauchzehe zerquetschen und im Olivenöl andünsten. Derweil die Muscheln spülen und geöffnete entfernen.\n3. Muscheln und Wein mit in die Pfanne geben und bei hoher Temperatur kochen, bis sie sich geöffnet haben. Unterdessen die Spaghetti übertun.\n4. Petersilie, verbleibende Knoblauchzehe und abgegossene Teigwaren zugeben. Salzen und Pfeffern. Kurz weiterköcheln, damit die Spaghetti den Sud aufsaugen können.\n",
    "tags": [
      "fisch",
      "schnell",
      "chic",
      "hauptgang",
      "laktosefrei"
    ],
    "ingr": [
      "für",
      "personen",
      "miesmuscheln",
      "knoblauchzehen",
      "weisswein",
      "olivenöl",
      "petersilie",
      "spaghetti",
      "salz",
      "pfeffer"
    ],
    "images": {
      "pfanne": "TReg9yvbe49CqWt8A"
    }
  },
  {
    "_id": "B95evRfSYMZeLkQW6",
    "name": "Mexikanisches Rotkraut",
    "url": "mexikanisches-rotkraut",
    "text": "#vegi #schnell #skizze\n\n\n\nMexikanisches Rotkraut\n======================\n\n    1 Rotkabis\n    Chili\n    Zucker\n    Salz\n    öl\n    Balisamico-Essig\n    \n1. Kabis in Scheiben schneiden. Diese auf ein Blech geben.\n2. Aus den restlichen Zutaten ein (fettiges) Sösschen zaubern und darübergeben.\n3. Im ofen ca. 30 Minuten backen",
    "tags": [
      "vegi",
      "schnell",
      "skizze"
    ],
    "ingr": [
      "rotkabis",
      "chili",
      "zucker",
      "salz",
      "balisamico",
      "essig"
    ]
  },
  {
    "_id": "BQfxZkotkdbb8ggQj",
    "name": "Apfelbrot",
    "url": "apfelbrot",
    "text": "#backen\n\nVon Kadri, der Estnin. ~\n\nApfelbrot\n=========\n\n    1kg Äpfel\n    250g Zucker\n    250g Rosinen\n    150g Nüsse\n    2 EL Kakaopulver\n    2 EL Schnaps\n    2 EL Zimt\n    ¼ EL Nelkenpulver\n    ¼ EL Kardamom\n    Nach belieben Ingwer\n    \n    \n1. Alle Zutaten gut mischen und eine Nacht lang zugedeckt ziehen lassen \n2. Mit 500g Mehl und 1½ Päckli Backpulver mischen. In Cakeformen füllen (mit Backtrennpapier auskleiden), backen 1½ Stunde bei 175° C\n\nAls Adventsgebäck sehr geeignet. Für Feinschmecker mit etwas Butter eine Delikatesse!\n\nOK geworden. Das nächste mal aber den Kakao weglassen, und etwas weniger Zucker nehmen (so 125g). ~ mr\n",
    "tags": [
      "backen"
    ],
    "ingr": [
      "äpfel",
      "zucker",
      "rosinen",
      "nüsse",
      "kakaopulver",
      "schnaps",
      "zimt",
      "nelkenpulver",
      "kardamom",
      "nach",
      "ingwer"
    ]
  },
  {
    "_id": "CpP7gJTWLgnNDyC35",
    "name": "Norwegische Bohnen",
    "url": "norwegische-bohnen",
    "text": "#hauptgang #vegisierbar #mamaroggo\n\nRezept von Lotti, Skandinavien-Auslandskorrespondentin~\n\nNorwegische Bohnen\n==================\n\nWäre eigentlich ein gutes Winteressen, bräuchte es nicht frische Tomaten und Bohnen. Darum am besten eingesetzt, um einen verregneten Sommertag aufzuwerten.\n\nBeilagen gehören schon noch dazu, etwa Backofenhäpperli, der Ofen ist ja eh schon warm.\n\n    4 Personen\n    \nBraucht ca. eine Stunde.\n\n    1½ kg Bohnen\n    150g Bratspeck\n    3 Tomaten in Scheiben\n    Béchamelsauce\n    Parmesan\n    \n1. Bohnen in Salzwasser kochen, derweil am Besten schon die Béchamelsauce zubereiten.\n2. Abgegossene Bohnen in eine gefettete Auflaufform geben. Specktranchen halbieren und anbraten, danach die Tomatenscheiben in der selben Pfanne kurz anbraten.\n3. Tomaten und Speck zu den Bohnen geben. Béchamelsauce und Parmesan darüber verteilen und im Ofen bei 200°C gratinieren.\n\nBéchamelsauce\n-------------\n\n    30g Butter\n    2 EL Mehl\n    5 dl Milch\n    Salz, Pfeffer, Muskat\n    \n1. Butter in einer Pfanne schmelzen.\n2. Mehl beifügen und auf kleiner Hitze dünsten, bis es toll riecht.\n3. Mit Milch ablöschen und unter Rühren abbinden lassen.\n4. Salz, Pfeffer und Muskat nach Belieben zugeben und fertig.\n\n![](norwegische-bohnen/img/mh-bohnen)\n",
    "tags": [
      "hauptgang",
      "vegisierbar",
      "mamaroggo"
    ],
    "ingr": [
      "personen",
      "bohnen",
      "bratspeck",
      "tomaten",
      "scheiben",
      "parmesan",
      "butter",
      "mehl",
      "milch",
      "salz",
      "pfeffer",
      "muskat"
    ],
    "images": {
      "mh-bohnen": "XJMCJec4cFspLdHRt"
    }
  },
  {
    "_id": "D8peCQTKCdiLpT4J9",
    "name": "Kaninchen an Senfsauce mit Oliven",
    "url": "kaninchen-an-senfsauce-mit-oliven",
    "text": "#fleisch #imvoraus #lokal #mamaroggo\n\nKaninchen an Senfsauce mit Oliven\n=================================\n\n    Für 4 Personen.\n\nDauert gut zwei Stunden. Dazu passen Polenta und Dörrbohnen.\n\n    1 Kaninchen\n    2 Knoblauchzehen\n    200g schwarze Oliven\n    1 EL Senf\n    4 Zweige Thymian\n    Olivenöl\n    2dl Weisswein\n    2dl Bouillon\n    2dl Rahm\n    Peterling\n\n![](kaninchen-an-senfsauce-mit-oliven/img/3lux9fnmq6ce4as64jmwhw_thumb_194d0)\n\n1. Kaninchen in Stücke teilen und salzen. Oliven entsteinen und hacken. Thymian vorbereiten. Knoblauch scheibeln.\n2. Fleisch in einer grossen Pfanne in Olivenöl anbraten, bis es etwas Farbe angenommen hat.\n3. Knoblauch, Thymian, Oliven und Senf beigeben. Andünsten.\n4. Mit Weisswein und Bouillon ablöschen und während 2 Stunden schmoren lassen.\n5. Rahm zur Sauce geben und mit Salz und Pfeffer abschmecken. Peterling hacken und darüber, fertig.\n\n![](kaninchen-an-senfsauce-mit-oliven/img/unadjustednonraw_thumb_1b416)\n\n![](kaninchen-an-senfsauce-mit-oliven/img/_dsc1380)\n",
    "images": {
      "3lux9fnmq6ce4as64jmwhw_thumb_194d0": "JFnrzrigiJpxKA6r5",
      "unadjustednonraw_thumb_1b416": "5BizJSxRoo8c7zGjY",
      "_dsc1380": "sGeTQGNKw2DStfRiv"
    },
    "tags": [
      "fleisch",
      "imvoraus",
      "lokal",
      "mamaroggo"
    ],
    "ingr": [
      "für",
      "personen",
      "kaninchen",
      "knoblauchzehen",
      "oliven",
      "senf",
      "thymian",
      "olivenöl",
      "weisswein",
      "bouillon",
      "rahm",
      "peterling"
    ]
  },
  {
    "_id": "DjRFBBBETA9rL2Zqj",
    "name": "Bärlauch-Spaghetti",
    "text": "Das Zeitfenster ist kurz: März und April! ~\n#vegi #hauptgang #mamaroggo #laktosefrei\n\nBärlauch-Spaghetti\n==================\n\n    Für 4 Personen.\n    \nSpaghetti kochen kannst du ja wohl selbst. Die Sauce geht so:\n\n    1 dl Olivenöl\n    1 Peperoncino\n    1 Knoblauchzehe\n    1 Zwiebel\n    2 Hand voll Bärlauch\n    2 Tomaten\n    20 schwarze Oliven\n    ½ kg Spaghetti\n    Parmesan\n    Salz, Pfeffer\n    \n![](barlauch-spaghetti/img/img_5439)\n\n1. Peperoncino, Knoblauch und Zwiebel in Scheibchen schneiden und im Olivenöl andämpfen.\n2. Bärlauch dazufügen, kurz mitdämpfen um alles Böse abzutöten.\n3. Tomaten und Oliven dazugeben, erhitzen. Abschmecken und mit Spaghetti vermischen. Parmesan dazu servieren.\n\n![](barlauch-spaghetti/img/img_1575)",
    "tags": [
      "vegi",
      "hauptgang",
      "mamaroggo",
      "laktosefrei"
    ],
    "ingr": [
      "für",
      "personen",
      "olivenöl",
      "peperoncino",
      "knoblauchzehe",
      "zwiebel",
      "bärlauch",
      "tomaten",
      "oliven",
      "spaghetti",
      "parmesan",
      "salz",
      "pfeffer"
    ],
    "url": "barlauch-spaghetti",
    "images": {
      "_dsc1424": "9ngRGiAHQK38e9ipb",
      "img_1575": "sgKCbahjABP2389Y6",
      "img_5439": "2Ajv7RBGyxHfDAfAt"
    }
  },
  {
    "_id": "Dy6hrSK2ihJ4qJzuE",
    "name": "Szegediner Gulasch",
    "text": "Damit auch der Koch mitapérölen kann ~\n\nSzegediner Gulasch\n==================\n\n#imvoraus #hauptgang #fleisch\n\n    Für 4 Personen.\n\nGarzeit 2h, aber Aufsetzten geht schnell.\n\n    800g Sauerkraut\n    2 Zwiebeln\n    1 Knoblauchzehe\n    800g Schweinsragout\n    Bratbutter\n    2 EL Paprika, süss\n    1 dl Weisswein\n    2 dl Hühnerbouillon\n    1 TL Kümmel\n    1 dl Rahm\n    250 g Crème fraîche\n    Mehl\n    Salz, Pfeffer\n    \n![](szegediner-gulasch/img/img_2520)\n\n1. Sauerkraut ausspülen. Zwiebeln und Knoblauchzehe schälen und klein würfeln.\n\n2. Schweinsragout mit Salz und Pfeffer würzen, in Portionen rundum kräftig\nin Bratbutter anbraten. Herr Maillard [grüsst freundlich](http://de.wikipedia.org/wiki/Maillard-Reaktion#Beeinflussung_der_Maillard-Reaktion). Beiseite stellen.\n\n3. Zwiebeln, Knoblauch und Paprika in Bratbutter etwa 5 Minuten dünsten. Mit Weisswein ablöschen und aufkochen. Fleisch wieder beifügen, Sauerkraut und Bouillon\ndazugeben und alles mit Kümmel, Salz und Pfeffer würzen. 1¾ Stunden weich schmoren. \n\n4. Rahm, Crème fraîche und 1 EL Mehl mischen und aufkochen (das verhindere späteres Ausflocken). Zum Servieren auf das Gulasch geben, evtl. mit Paprika bestreuen fürs Auge.\n\nKommt natürlich auch gut, wenn man die Kartoffeln weglässt und stattdessen mit [Knödeln](bohmische-knodel) serviert.",
    "tags": [
      "imvoraus",
      "hauptgang",
      "fleisch"
    ],
    "ingr": [
      "für",
      "personen",
      "sauerkraut",
      "zwiebeln",
      "knoblauchzehe",
      "schweinsragout",
      "bratbutter",
      "paprika",
      "weisswein",
      "hühnerbouillon",
      "kümmel",
      "rahm",
      "cr",
      "mehl",
      "salz",
      "pfeffer"
    ],
    "url": "szegediner-gulasch",
    "images": {
      "img_2520": "Tb5AwzjSeMF7h3taF"
    }
  },
  {
    "_id": "E6Fp5KWniQfgr5cfo",
    "name": "Kladdkaka",
    "url": "kladdkaka",
    "text": "\n#dessert\n\n\nKladdkaka\n=====================\n\nFür kleine Springform\n\n    150 g Butter\n    2 Eier\n    3 dl Zucker\n    2 dl Mehl\n    1 dl Kakao\n    1 TL Vanillezucker\n\n1. Alles gut vermischen und in die mit Backpapier belegte Springform geben.\n2. Bei 180 Grad ca. 30 Minuten backen.\nAchtung: Die Backzeit ist der Clou an der Geschichte! Der Kuchen muss aussen noch knusprig, innen jedoch noch fast flüssig sein!\n\n",
    "tags": [
      "dessert"
    ],
    "ingr": [
      "butter",
      "eier",
      "zucker",
      "mehl",
      "kakao",
      "vanillezucker"
    ]
  },
  {
    "_id": "EddZCPWTsumFgmNxk",
    "name": "Baumnuss-Sauce zu Teigwaren",
    "text": "Baumnuss-Sauce zu Teigwaren\n==========================\n\n#schnell #vegi #hauptgang #mamaroggo\n\n    1 Knoblauchzehe\n    75g Baumnüsse\n    ½ Bund Peterling\n    Etwas Basilikum\n    1 Peperoncino\n    ½ dl Olivenöl\n    1 dl Teigwarenwasser\n    Salz, Pfeffer\n    \n1. Nüsse im Backofen bei 180°C während ca. 20 Minuten rösten\n2. Alle Zutaten im Mixer fein hacken\n3. Abschmecken mit Salz und Pfeffer.",
    "tags": [
      "schnell",
      "vegi",
      "hauptgang",
      "mamaroggo"
    ],
    "ingr": [
      "knoblauchzehe",
      "baumnüsse",
      "peterling",
      "etwas",
      "basilikum",
      "peperoncino",
      "olivenöl",
      "teigwarenwasser",
      "salz",
      "pfeffer"
    ],
    "url": "baumnuss-sauce-zu-teigwaren",
    "images": {}
  },
  {
    "_id": "Evgw8ed2PiEchm9cf",
    "name": "Negroni",
    "url": "negroni",
    "text": "#getränk #alk\n\nHätte das Potenzial zum Sommergetränk 2016, bestünde er nicht ausschliesslich aus Spirituosen: ~\n\nNegroni\n=======\n\n    3cl Campari\n    3cl Gin\n    3cl Roter Vermouth\n    Eis\n    Orange\n    \n    \n1. Gin, Campari und Vermouth mit Eis in Tumbler geben\n2. Rühren.\n3. Mit Orangenschnitz garnieren\n4. Falls heute kein Feiertag ist noch ein Schuss Mineralwasser zugeben",
    "tags": [
      "getränk",
      "alk"
    ],
    "ingr": [
      "campari",
      "gin",
      "roter",
      "vermouth",
      "eis",
      "orange"
    ]
  },
  {
    "_id": "F8M7D4Hy74SHwQ7Tm",
    "name": "Teigwaren für faule Hausfrauen",
    "text": "Teigwaren für faule Hausfrauen\n=========\n\n#schnell #hauptgang #mamaroggo #laktosefrei\n\n    500g Teigwaren\n    Cherry-Tomaten\n    1 Knoblauchzehe\n    Schnittlauch\n    Olivenöl\n    Bratspeck\n    \n![](teigwaren-fur-faule-hausfrauen/img/img_3891)\n   \n0. Teigwaren übertun \n1. Speck schneiden und anbraten, Knoblauch zugeben und andünsten\n2. Cherry-Tomätli halbieren, zugeben und warm werden lassen\n3. Schnittlauch und Olivenöl zugeben\n4. Mit den Teigwaren mischen, fertig!\n\n\n![](teigwaren-fur-faule-hausfrauen/img/unadjustednonraw_thumb_18ade)\n\n",
    "tags": [
      "schnell",
      "hauptgang",
      "mamaroggo",
      "laktosefrei"
    ],
    "ingr": [
      "teigwaren",
      "cherry",
      "tomaten",
      "knoblauchzehe",
      "schnittlauch",
      "olivenöl",
      "bratspeck"
    ],
    "url": "teigwaren-fur-faule-hausfrauen",
    "images": {
      "unadjustednonraw_thumb_18ade": "PKvsbWmaa99AQH3bw",
      "img_3891": "FPMAx79j2GiwhY38e"
    }
  },
  {
    "_id": "Fq4B7PjGtucvLTykf",
    "name": "No Knead Bread",
    "url": "no-knead-bread",
    "text": "#backen #imvoraus #24h+ #kalt\n\nWenn Hipster backen… ~\n\nNo Knead Bread\n==============\n\nDas Brot wird im Topf gebacken. Dort drin ist es feucht und das gibt eine schöne Kruste, they said.\n\n![](no-knead-bread/img/nufs4eassdgrvgy8xp0pia_thumb_103fc)\n\n    500g Mehl\n    4dl Wasser\n    1 KL Salz\n    ¼ KL Trockenhefe\n    Gusseisentopf\n\n1. Zutaten verrühren, 20h (!) gehen lassen. Nicht erschrecken, wenn der Teig gar flüssig scheint, das ist so gedacht.\n2. Teig mehlen, zusammenfalten, und nochmals 2h gehen lassen.\n3. Derweil nicht vergessen, den Ofen mit Gusseisentopf  rechtzeitig auf 250° vorzuwärmen. Nach der zweiten Gehzeit das Brot in den Bräter geben und während 30 Minuten bei geschlossenem Deckel backen.\n4. Für die letzten 15 Minuten ohne Deckel fertigbacken.\n\n![](no-knead-bread/img/fgw3nce6rckrnqcqsihycg_thumb_e397)\n\nHier noch in der Variante mit etwas Vollkornmehl und *Lievito Madre*:\n\n![](no-knead-bread/img/img_4889)\n![](no-knead-bread/img/img_4891)\n",
    "tags": [
      "backen",
      "imvoraus",
      "24h+",
      "kalt"
    ],
    "ingr": [
      "mehl",
      "wasser",
      "salz",
      "trockenhefe",
      "gusseisentopf"
    ],
    "images": {
      "nufs4eassdgrvgy8xp0pia_thumb_103fc": "i7F6dhQ9E5zmtAWL9",
      "fgw3nce6rckrnqcqsihycg_thumb_e397": "BSGMMLK2tDyWNEBJv",
      "img_4889": "fYFsbLrHYr6dEuXaC",
      "img_4891": "iuSG2Yfdqu3taGKH6"
    }
  },
  {
    "_id": "GvMaCvyeRoMQNYYAH",
    "name": "Pfannkuchen",
    "text": "Damit wir uns recht verstehen: Weder Crèpes noch Pancakes, sondern ca. 2mm dickes wickelbares Petzi-Futter ~\n\n#hauptgang #vegi #anti-pasta #mamaroggo #laktosefrei\n\nPfannkuchen\n===========\n\nEtwa 14 Stück!\n\n\n    8 Eier\n    400 g Mehl\n    4 dl Wasser\n    4 dl Milch\n    2 KL Salz\n    Öl\n\n![](pfannkuchen/img/e7d49f894c4ac40ec3aab5925da8882c)\n    \n1. Mehl, Salz und Wasser zu einem Teig rühren.\n2. Milch und Eier erst danach zugeben (so gibts keine Klümpchen). \n3. Nach Möglichkeit einige Stunden ruhen lassen. Vor dem Backen aufrühren, evtl. nochmals Flüssigkeit zugeben.\n4. Zum Backen 1 KL Öl in beschichteter Bratpfanne erhitzen, eine Kelle Teig in die Mitte geben und durch Schwenken der Pfanne verteilen. Backen bis der Rand etwas bräunlich wird, mit Bratschaufel wenden, fertigbacken, nach Belieben füllen.\n\n![](pfannkuchen/img/img_5453)\nLässt sich auch prima flambieren\n\nNotizen zu Füllungen ~\n\nHeidelbeeren\n------------\n\nHeisse Pfanne, Butter schmelzen, etwas Zucker rein, kurz caramélisieren, mit Heidelbeeren ablöschen, kurz einkochen, vielleicht noch Salz, Zucker und Pfeffer rein.\nKombinieren in einem Pfannkuchen mit Schlagrahm, _frischen_ Heidelbeeren und Zucker. Wichtig: Wenig Füllung!\n\nFlambiert\n---------\n\nButter in der Pfannkuchen-Pfanne heiss werden lassen, vorbereiteten Pfannkuchen rein, Grand-Marnier darüber (ca. ½dl), Zucker ebenso. Etwas eindicken lassen, zusammefalten, kucken dass die ganze Sauce mitkommt beim Servieren.",
    "tags": [
      "hauptgang",
      "vegi",
      "anti-pasta",
      "mamaroggo",
      "laktosefrei"
    ],
    "ingr": [
      "eier",
      "mehl",
      "wasser",
      "milch",
      "salz",
      "öl"
    ],
    "url": "pfannkuchen",
    "images": {
      "e7d49f894c4ac40ec3aab5925da8882c": "dzFdrEQkdiCbs5yz5",
      "img_5453": "DGTcvvNyNedei9fDE"
    }
  },
  {
    "_id": "H4n3png2AxF2kBMpZ",
    "name": "Warme Brille",
    "url": "warme-brille",
    "text": "Immer wieder gern an Autobahnraststätten ~\n\nWarme Brille\n============\n\nFür 4 Personen.\n\n    500g Kartoffeln\n    1 Frühlingszwiebel\n    1 Bund Peterling\n    1 dl Öl\n    Salz\n    Pfeffer\n    1 Eigelb\n    ½ Zitrone\n    2 EL Senf\n    Bouillon\n\n![](warme-brille/img/mdeof3agsmo7ooegosyfg_thumb_199a6)\n\n\n1. Kartoffeln (festkochende Sorten!) kochen.\n2. Derweil Sauce vorbereiten: Öl tröpfchenweise zum zimmerwarmen Eigelb geben. Tüchtig rühren, eine Mayonnaise wird geboren. Saft der Zitrone, Senf, Salz, Pfeffer, gehackte Frühlingswiebel und Peterling dazugeben.\n3. Kartoffeln abschrecken, schälen, scheibeln und mit Bouillon übergiessen, stehen lassen.\n4. Überschüssige Bouillon abgiessen und Sauce dazugeben. Zärtlich umrühren.\n5. Servieren mit warmen Wienerli und Senf.\n",
    "images": {
      "mdeof3agsmo7ooegosyfg_thumb_199a6": "bhMAcmuJ3uAdeDFZf"
    },
    "tags": [],
    "ingr": [
      "kartoffeln",
      "frühlingszwiebel",
      "peterling",
      "öl",
      "salz",
      "pfeffer",
      "eigelb",
      "zitrone",
      "senf",
      "bouillon"
    ]
  },
  {
    "_id": "KNQxPq7sCQBuAq2D6",
    "name": "Momos",
    "url": "momos",
    "text": "#hauptgang #vegi #leicht #chic #laktosefrei\n\nIm Anschluss an Frau Hugentoblers Dia-Vortrag zur Tibetreise '84 gibt es ein Apéro im Foyer mit Mönchsgesang, angeregten Gesprächen und ~ \n\nMomos\n=====\n\n\n![](momos/img/unadjustednonraw_thumb_1740a)\n\n\nHülle\n-------\n\n    250g Mehl\n    ¼ TL Salz\n    125ml Wasser\n    \n1. Mehl, Wasser und Salz verrühren und zu einem glatten Teig kneten.\n2. Ein paar Stunden ruhen lassen. So wird er schön zäh und lässt sich dünn ausziehen.\n\nTunke\n-------\n\n    3 Tomaten\n    3 Peperoncini\n    Salz, Zucker\n    \nMit einem Mixer zu einem glatten Dip verarbeiten.\n\nFülle\n------\n\n    2 Rüebli\n    2 cm Ingwer, gerieben\n    ½ Weisskohl\n    2 Zehen Knoblauch\n    1 Zwiebel\n    1 Msp Zimt\n    1 Msp Sternanispulver\n    ¼ TL Kardamom\n    ¼ TL Koriander\n    ½ TL Kreuzkümmel\n    1 TL Salz\n    Pfeffer\n    Paneer\n    Whatever turns you on\n   \n1. Rüebli und Weisskohl an Röstiraffel oÄ. reiben. \n2. Gewürze zugeben, alles Mischen.\n3. Teig aus der Reserve holen. Baumnuss-grosse Teigstücke zu Handteller-grossen Fladen formen. Mehlen!\n4. Das Füllen geht so:\n    - Einen Fladen mit der linken Hand kuhlig halten und lächerlich viel Füllung darauf geben (zwei gehäufte Esslöffel)\n    - Mit der anderen Hand einen Zipfel vom Rand her ausziehen und bis in die Mitte der Füllung legen, …\n    - …diesen zwischen Zeigefinger und Daumen festhalten, während der Mittelfinger einen neuen Zipfel nachzieht und zum bestehenden hinrafft. Dabei kann der Daumen der linken Hand gute Dienste leisten, indem er den Teig von Füllung befreit.\n5. Die fertigen Momos kommen auf einen gefetteten Siebeinsatz in einen Dampfkochtopf. Während ca. 20 Minuten garen.\n6. Servieren mit Tunke und Sojasauce.\n\n![](momos/img/unadjustedraw_thumb_198b9)\n![](momos/img/unadjustedraw_thumb_198b6)\n![](momos/img/unadjustedraw_thumb_198ba)\n![](momos/img/unadjustedraw_thumb_198bd)",
    "tags": [
      "hauptgang",
      "vegi",
      "leicht",
      "chic",
      "laktosefrei"
    ],
    "ingr": [
      "mehl",
      "salz",
      "wasser",
      "tomaten",
      "peperoncini",
      "salz",
      "zucker",
      "rüebli",
      "ingwer",
      "weisskohl",
      "knoblauch",
      "zwiebel",
      "msp",
      "zimt",
      "msp",
      "sternanispulver",
      "kardamom",
      "koriander",
      "kreuzkümmel",
      "salz",
      "pfeffer",
      "paneer",
      "whatever"
    ],
    "images": {
      "unadjustedraw_thumb_198b6": "ba3TsS4EYTjaCznkv",
      "unadjustedraw_thumb_198b9": "ayaWJAqMqtY384LNh",
      "unadjustedraw_thumb_198ba": "BesMo9wqJLvQAzSpi",
      "unadjustedraw_thumb_198bd": "FSnpqbQMaYuJrGwhN",
      "unadjustednonraw_thumb_1740a": "kyAFHGXWJLqDKjobp"
    }
  },
  {
    "_id": "KnegJKr3AjzpgsifG",
    "name": "Sommerrollen",
    "url": "sommerrollen",
    "text": "Verenas schnelle Fladen-Küche, Teil 1 ~\n\n#hauptgang #leicht #kalt #vegi #mengenlos #laktosefrei\n\nSommerrollen\n============\n\nDie Zutatenliste ist eher als Vorschlag gedacht. \n\n    Reispapier\n    Sojasauce\n    Fischsauce\n    Chili\n    Chinakohl\n    Rüebli\n    Salatgurke\n    Glasnudeln\n    Maiskörner\n    Avocado\n    Tofu\n    Koreander\n    Basilikum\n    Sesam\n    Limetten\n\n![](sommerrollen/img/offen)\n\n1. Gemüse huren fein schneiden. Tofu braten. Avocado in fingerdicke Stücke schneiden. Koreander und Basilikum waschen.\n3. Danach Stück für Stück: Reispapier kurz in warmem Wasser ziehen lassen, dann von Allem™ darin einpacken. Damit das Reispapier nicht zu sehr am Teller klebt, kann man diesen zuvor befeuchten.\n4. Sojasauce, Fischsauce und Limettensaft nach Vorliebe mischen, Wickel drin tunken.\n\n![](sommerrollen/img/wickel)\n\n![](sommerrollen/img/hand)",
    "tags": [
      "hauptgang",
      "leicht",
      "kalt",
      "vegi",
      "mengenlos",
      "laktosefrei"
    ],
    "ingr": [
      "reispapier",
      "sojasauce",
      "fischsauce",
      "chili",
      "chinakohl",
      "rüebli",
      "salatgurke",
      "glasnudeln",
      "maiskörner",
      "avocado",
      "tofu",
      "koreander",
      "basilikum",
      "sesam",
      "limetten"
    ],
    "images": {
      "offen": "jm4F5oD8kLJpqHbBs",
      "hand": "keHbaAtGTGdBxri3n",
      "wickel": "S3qRWawRCdtcSSZTr"
    }
  },
  {
    "_id": "LDcMziLX4hjSMwpAb",
    "name": "Auberginen-Salat",
    "text": "Aus Sizilien. Elias' improvisierte Variante ~\n\nAuberginen-Salat\n================\n\n#vegi #mengenlos #beigemüse #skizze\n\n    Auberginen\n    Olivenöl\n    Knoblauch\n    Kokosraspel\n    Rosinen\n    Mandeln, geröstet\n    \nGewürfelte Auberginen und Knoblauch in Olivenöl andünsten. Dauert 10 min. Kokosraspel und Rosinen zugeben. Ob Mandeln drin waren weiss ich grad gar nicht mehr.",
    "tags": [
      "vegi",
      "mengenlos",
      "beigemüse",
      "skizze"
    ],
    "ingr": [
      "auberginen",
      "olivenöl",
      "knoblauch",
      "kokosraspel",
      "rosinen",
      "mandeln"
    ],
    "url": "auberginen-salat"
  },
  {
    "_id": "M932vXxWp9BYgKMRb",
    "name": "Apfel-Mohn-Cake",
    "text": "Luftig ist anders ~\nApfel-Mohn-Cake\n===============\n\n#backen\n\nFür eine Cakeform von 26cm Länge, ca. 10 Stück\n\n\n![](apfel-mohn-cake/img/gar_feucht)\n\n    125g Butter\n    125g Zucker\n    1 Päckchen Vanillezucker\n    1 Msp. Salz\n    3 Eier\n    125g Mohnsamen\n    150g Mehl\n    1 TL Backpulver\n    800g Äpfel\n    1TL Salz\n    \n1. Für den Teig Butter rühren, bis sich Spitzchen bilden. Zucker, Vanillezucker, Salz und Eier zugeben, rühren, bis die Masse hell ist. Mohn darunter rühren. Mehl und Backpulver mischen, dazu sieben, darunter rühren.\n\n2. Äpfel schälen, halbieren, Kerngehäuse entfernen, in 1 mm dicke Scheibchen hobeln. Äpfel sorgfältig mit dem Teig mischen, in die mit Backpapier ausgelegte Form schichten. Mit den Händen gut in die Ecken verteilen.\n\n3. Im unteren Teil des auf 180 °C vorgeheizten Ofens 1½ Stunden backen.\n\nDazu passt mit Vanillemark aromatisierte und gesüsste Crème fraîche.\n\n![](apfel-mohn-cake/img/dsc_0001)\n\n60g Mohn / 120g Mehl wurde etwas nass (unteres Foto). 120g Mohn / 150g Mehl hat gut geklappt. ~mr\n\n",
    "tags": [
      "backen"
    ],
    "ingr": [
      "butter",
      "zucker",
      "vanillezucker",
      "msp",
      "salz",
      "eier",
      "mohnsamen",
      "mehl",
      "backpulver",
      "äpfel",
      "salz"
    ],
    "url": "apfel-mohn-cake",
    "images": {
      "dsc_0001": "gjwJmEpwwQxw458HA",
      "gar_feucht": "vCYKKSy3HGWe6idZe"
    }
  },
  {
    "_id": "MgaTfYc3ZCmz4ajY8",
    "name": "Geschnetzeltes à la Vigneronne",
    "text": "Fleisch mit Zimt, so geil: ~\n\nGeschnetzeltes à la Vigneronne\n==============================\n\n#fleisch #chic #hauptgang\n\n    Für 4 Personen.\n\nPasst gut zu Teigwaren, Spätzli, Rösti...\n\n\nVorbereiten\n-----------\n\n    150g Trauben    \n    400g Pouletgeschnetzeltes\n    200g Hühnerleber\n    3 KL Mehl\n    ½ TL Zimt\n    ¾ TL Salz\n\n0. Backofen auf 80° vorheizen, Trauben halbieren und entkernen.\n1. Hühnerleber zerkleinern. Mehl, Zimt und Salz vermischen.\n2. Fleisch trocken tupfen und in vermischtem Mehl, Zimt und Salz wenden.\n3. In Bratbutter anbraten und im Ofen warm stellen.\n\nUnd los!\n--------\n\n    1 Zwiebel\n    1 KL Majoran\n    1 dl Marsala\n    1½ dl Hühnerbouillon\n    1 KL Zucker\n    ¼ KL Zimt\n    2 dl Rahm\n    ½ KL Maizena\n    Pfeffer\n    \n1. Zwiebel (gehackt) und Majoran in der gebrauchten Pfanne andämpfen.\n2. Mit Marsala und Bouillon ablöschen. Zucker und Zimt beigeben auf ca. die Hälfte einkochen.\n3. Maizena im Rahm verrühren und zugeben, köcheln.\n4. Fleisch und Trauben beifügen, nur noch warm werden lassen.",
    "tags": [
      "fleisch",
      "chic",
      "hauptgang"
    ],
    "ingr": [
      "für",
      "personen",
      "trauben",
      "pouletgeschnetzeltes",
      "hühnerleber",
      "mehl",
      "zimt",
      "salz",
      "zwiebel",
      "majoran",
      "marsala",
      "hühnerbouillon",
      "zucker",
      "zimt",
      "rahm",
      "maizena",
      "pfeffer"
    ],
    "url": "geschnetzeltes-a-la-vigneronne",
    "images": {}
  },
  {
    "_id": "NCQHNExiqwb27oFg9",
    "name": "Hermann",
    "url": "hermann",
    "text": "#backen #tamagotchi #24h+ #skizze\nDa frohlockt der Eierkopf: ein rekursives Rezept mit SI-Einheiten. ~\n\nHermann\n=======\n\n    1kg Hermann\n    1kg Zucker\n    1kg Mehl\n    1kg Milch\n    \n1. Alles vermischen\n2. 1 Woche warten\n\nBestandsregulierung\n-------------------\n\n\n",
    "tags": [
      "backen",
      "tamagotchi",
      "24h+",
      "skizze"
    ],
    "ingr": [
      "hermann",
      "zucker",
      "mehl",
      "milch"
    ],
    "images": {}
  },
  {
    "_id": "NEfuNqEQm593vzJcW",
    "name": "Lava Cakes",
    "text": "\nSchokoküchlein, aussen kross, ihnen flüssig. Rezept von Jana Giceva. ~\n\nLava Cakes\n==========\n\n#backen #dessert\n\nErgibt 8 Stück.\n\n    200g Puderzucker\n    250g Dunkle Schokolade\n    200g Butter\n    100g Mehl\n    5 Eier\n\n1. Ofen auf 180° vorheizen. Butter in Pfanne schmelzen.\n2. Schokolade mit kochendem Wasser übergiessen, kurz stehen lassen und vorsichtig abschütten.\n3. Zucker, Schokolade, Butter und Mehl vermengen und, sobald kühl genug, Eier dazufügen. Konsistenz: Cake-Teig-mässig.\n4. In Förmchen giessen und 10-15 Minuten backen, so dass sie aussen fest werden, innen aber noch flüssig sind.\n\nPasst imfau super zu Orangensalat ~mr",
    "tags": [
      "backen",
      "dessert"
    ],
    "ingr": [
      "puderzucker",
      "dunkle",
      "schokolade",
      "butter",
      "mehl",
      "eier"
    ],
    "url": "lava-cakes"
  },
  {
    "_id": "NHxongckyDqLtJE4c",
    "name": "Mais nach Gemma",
    "text": "#vegi #anti-pasta #lokal #mamaroggo\n\nMais nach Gemma\n===============\n\nFür 4 Personen\n\n    250 g Maisgriess Mittel\n    2 Stengel Lauch\n    2 Rüebli\n    5 dl Wasser\n    5 dl Milch\n    Bouillon\n    \n1. Alles aufkochen lassen, dabei immer wieder umrühren (brennt sonst an).\n2. Sobalds kocht, Kochplatte ausschalten, Pfanne zudecken und Gericht auf warmer Kochplatte quellen lassen (brennt so nicht mehr an).\n3. Vor dem Servieren Parmesan und evt. etwas Butter darunterziehen.",
    "tags": [
      "vegi",
      "anti-pasta",
      "lokal",
      "mamaroggo"
    ],
    "ingr": [
      "maisgriess",
      "mittel",
      "stengel",
      "lauch",
      "rüebli",
      "wasser",
      "milch",
      "bouillon"
    ],
    "url": "mais-nach-gemma",
    "images": {}
  },
  {
    "_id": "QbiY6Ws4MSiaQnB3G",
    "name": "Tarte Tatin",
    "url": "tarte-tatin",
    "text": "#backen #dessert\n\nZucker. Butter. Viel gesundes Obst. ~\n\nTarte Tatin\n===========\n\n    100g Zucker\n    50g Butter\n    5 Äpfel\n    Blätterteig, 32cm ø\n    \n![](tarte-tatin/img/img_5634)\n    \n1. Zucker gleichmässig auf einem runden Backblech verteilen und im heissen Ofen caramelisieren. Herausnehmen und etwas kühlen lassen.\n2. Butter in Flöckchen auf dem Caramel-Blech verteilen. Äpfel applizieren.\n3. Die ganze Sache mit dem Teig zudecken und ca. 20 min. bei 220° backen.\n\nVanilleglacé passt gut dazu.\n\n- Noch georg wegen den richtigen Mengen fragen! ~ mr",
    "tags": [
      "backen",
      "dessert"
    ],
    "ingr": [
      "zucker",
      "butter",
      "äpfel"
    ],
    "images": {
      "img_5634": "K7oLdBXgu8q2sZjWA"
    }
  },
  {
    "_id": "QxjvffMc28Lytq4dp",
    "name": " Rezept.ee",
    "url": "rezeptee",
    "text": "Los, kochen, jetzt!\n-------------------\n\n Rezept.ee\n===========\n\n*Auf dass die doppelte Plural eines Tages gerechtfertigt sein wird!*\n\n1. Letzthin gut gegessen, und du warst schuld daran?\n2. Muttis Fresszettel vom Lieblingsrezept löst sich langsam auf?\n3. Jemandem ein Rezept versprochen?\n\nStell's hier drauf!\n\n\n![](rezeptee/img/flora)\n\nFAQ\n---\n\n\"A user interface is like a joke. If you have to explain it, it’s not that good.\" ~ mündlich überliefert\n\n\n    Wie kann ich bearbeiten?\n    \nRechtsklick auf den Text! Das geht sogar mit dieser Begrüssungsseite. Bloss keinen Unsinn anstellen!\n\n    Und wie speichern?\n    \nEinfach erneut rechtsklicken.\n\n    Wie kann ich eine neues Rezept erstellen?\n    \nAm Ende der Rezepte-Liste findest du den Punkt \"Neu…\". Klick drauf. Vergiss nicht, deinem Rezept einen Titel zu geben, damit es gespeichert wird. Der Rezepttitel wird daran erkannt, dass er mit \"`===`\"-Zeichen unterstrichen ist.\n\n    Schlagwörter\n    \nKlicke auf ein Schlagwort, um danach zu Filtern. Halte die Alt-Taste dabei gedrückt, um ein zweites (drittes, viertes…) Schlagwort hinzuzufügen, anstatt ein bisheriges zu ersetzen.\n\n    %&* geht nicht!\n    \nEinen Fehler gefunden? Merci für's Eintragen in dieser Liste:\n\n    Link zur Liste fehlt.\n\nBekannte Fehler\n---------------\n\n1. Für die Suche nach Zutaten gibts noch keine Autovervollständigung.\n\nIdeen für neue Funktionen\n-------------------------\n\n    Saison\n    \nRezepte nach Zutaten und deren Saisonalität ordnen.\n\n    Zutaten hervorheben\n    \nBeim Überfahren der Zutaten werden diese im Text hervorgehoben.\n\n    Automatisches Speichern\n\nWäre es möglich ein automatisches Speichern einzufügen? Vielleicht so alle 2-3 Minuten wenn man bearbeitet? \n\nQuellen\n-------\n\n- Die Optik ist massiv von Kaltenbachs [Italien-Schwarte](http://www.zvab.com/advancedSearch.do?title=%22Aus+Italiens+K%FCchen%22&author=Kaltenbach,+Marianne;&iref=suggest07) in der '82er-Ausgabe inspiriert.\n\n- Die Schriften sind von [Igino Marini](http://iginomarini.com/fell/).\n\n\nAnmerkungen kannst du (wie bei jedem anderen Rezept auch) hier unten anfügen, indem du die Seite bearbeitest. Und am besten signiert, mit Tilde und Initialen. ~mr\n\n*Geniale Seite! ~mae*\n\n*Einfach mega! ~rom*\n",
    "tags": [],
    "ingr": [
      "wie",
      "und",
      "wie",
      "rezept",
      "schlagwörter",
      "link",
      "liste",
      "saison",
      "zutaten",
      "automatisches",
      "speichern"
    ],
    "images": {
      "flora": "ekQZ2e8WbvaaYRSDQ"
    }
  },
  {
    "_id": "WjnFiSGpQtA4vQWWm",
    "name": "Meringues",
    "text": "Dessert aus der Vorratsdose ~\n#dessert #backen #imvoraus\n\nMeringues\n=========\n![](meringues/img/etonmesshiang1)\n\n    4 Eiweiss\n    100 g Puderzucker\n    120 g Zucker\n    evtl. Vanillezucker/Mark\n    1½ EL Maisstärke\n\n1. Das Eiweiss steif schlagen. Die Hälfte des Zuckers beigeben, weiter schlagen, bis die Masse glänzt. Restlichen Zucker zufügen, nur kurz weiter schlagen.\n2. Puderzucker und Maisstärke mischen, dazusieben, sorgfältig unter die Masse ziehen.\n3. Masse in Klecksen auf ein Backpapier geben.\n4. In der Mitte des auf 100 °C vorgeheizten Ofens ca. 1¾ Stunden backen, im leicht geöffneten Ofen auskühlen lassen.\n\nCa. 2 Wochen altes Eiweiss ergibt einen festeren Eischnee als ganz frisches. Das Eiweiss muss zum Steif schlagen ganz kalt sein. Ofentüre beim Backen evtl. leicht öffnen. \n\n\nSauce\n-----\n\n    1 dl Sauerrahm\n    1 dl Rahm\n\nSchlagen. Servieren!\n\nFalls es Erdbeeren oder Früchte (mit Säure) dazu gibt, kann man den Sauerrahm auch weglassen.\n\n\nHabs grad letzthin mit Erdbeeren als [Eton Mess](https://duckduckgo.com/?q=eton+mess&iax=1&ia=images#) gegessen. So geil! ~ mr\n\n\nMatthü, was würde ich nur ohne die Meringues-Schachtel in unserer Küche machen… ~ cb ",
    "tags": [
      "dessert",
      "backen",
      "imvoraus"
    ],
    "ingr": [
      "eiweiss",
      "puderzucker",
      "zucker",
      "vanillezucker",
      "mark",
      "maisstärke",
      "sauerrahm",
      "rahm"
    ],
    "url": "meringues",
    "images": {
      "etonmesshiang1": "FkXiRHcPJdXFzaDPc"
    }
  },
  {
    "_id": "XFzqquYoLj9iJ7jpX",
    "name": "Hafer-Schoko-Guetzli",
    "url": "hafer-schoko-guetzli",
    "text": "#backen #laktosefrei\n\nHafer-Schoko-Guetzli\n====================\n\n    60g Schokolade\n    60g Butter\n    120g Haferflöckli\n    30g Mehl\n    1 Ei\n    50g Zucker\n    ½TL Backpulver\n\n![](hafer-schoko-guetzli/img/guetzli)\n    \n1. Schokolade hacken, Backofen auf 180°C einstellen, Butter schmelzen.\n3. Haferflocken, Schokostücke, Mehl, Ei, Zucker und Backpulver zur Butter dazugeben und zu einem leicht klebrigen Teig rühren.\n3. Zwei Bleche bereitstellen. Mit mit Teelöffel portionenweise abstechen und aufs Blech geben.\n4. Ca. 10 Minuten backen.\n\n\n(Aus dem Migros-Kochbuch)",
    "tags": [
      "backen",
      "laktosefrei"
    ],
    "ingr": [
      "schokolade",
      "butter",
      "haferflöckli",
      "mehl",
      "ei",
      "zucker",
      "backpulver"
    ],
    "images": {
      "guetzli": "DnidgtShAPYsccFwJ"
    }
  },
  {
    "_id": "YPnFkTe5jLaQpenK6",
    "name": "Cheese Cake",
    "url": "cheese-cake",
    "text": "#dessert\n\n\nCheese Cake\n=====================\n\ngerade gut für grosse Springform\n\n    90 g Butter\n    80 g Zucker\n    150 g Petit-Beurre, fein verbrösmelet\n    150 g Vollrahmquark\n    200 g Halbfettquark\n    80 g Zucker \n    2 Eier\n    1 Becher saurer Halbrahm\n\n\n1. Butter, Zucker und Petit-Beurre gut vermischen und in die mit Backpapier belegte Form geben, leicht andrücken.\n2. Quark, Zucker und Eier gut verrühren und auf obige Masse geben. \n3. Ca. 30 Minuten bei 200 Grad ca. 30 Minuten backen (Ofen vorheizen).\n4. Auskühlen lassen.\n5. saurer Halbrahm darauf streichen und mit Früchten garnieren.\n\n\n",
    "tags": [
      "dessert"
    ],
    "ingr": [
      "butter",
      "zucker",
      "petit",
      "beurre",
      "vollrahmquark",
      "halbfettquark",
      "zucker",
      "eier",
      "becher",
      "halbrahm"
    ]
  },
  {
    "_id": "aCXRQrkSm6A2QSYx5",
    "name": "Caesar Salad",
    "text": "Verhunzte Klassiker ~\n#salat #hauptgang #laktosefrei #kalt\n\nCaesar Salad\n============\n\n    Für 6 Personen\n\nDas Rezept ist aus der [Zeit](http://www.zeit.de/zeit-magazin/2014/20/wochenmarkt-caesar-salad).\n\nSalat & Croutons\n-------------------\n\n    3 Romana-Salatherzen\n    Parmesan en bloc\n    Weissbrot\n    Olivenöl\n    Salz, Pfeffer\n    \nFür die Croûtons wird Weißbrot in ungefähr 2 cm große Stücke gerissen. Mit Olivenöl, Salz und Pfeffer vermengen, auf ein mit Backpapier ausgelegtes Blech legen, bei 190 Grad 10 bis 15 Minuten lang backen, bis das Brot goldbraun ist. Die Blätter ließ Cesare Cardini angeblich ganz, man aß sie mit der Hand.\n\nDressing\n--------\n\n    6 Sardellen\n    1 Knoblauchzehe\n    2 Eigelb\n    2 TL Zitronensaft\n    1 TL scharfen Senf\n    2 TL Olivenöl\n    100 ml Pflanzenöl\n    3 EL geriebenen Parmesan\n\nFür das Dressing werden Sardellen, Knoblauch und Salz mit dem Stabmixer zu einer Paste verrührt. In eine Schüssel geben, Eigelb, Zitronensaft, Senf und Olivenöl hinzufügen. Pflanzenöl langsam dazugießen, dabei rühren, bis das Dressing zu einer mayonnaiseartigen Creme wird. Geriebenen Parmesan dazugeben, abschmecken mit Salz, Pfeffer und Zitronensaft.\n\n\nRecht maschtig, aber ich musste ja unbedingt die ganze Portion machen... ~ mr\n",
    "tags": [
      "salat",
      "hauptgang",
      "laktosefrei",
      "kalt"
    ],
    "ingr": [
      "für",
      "personen",
      "romana",
      "salatherzen",
      "parmesan",
      "weissbrot",
      "olivenöl",
      "salz",
      "pfeffer",
      "sardellen",
      "knoblauchzehe",
      "eigelb",
      "zitronensaft",
      "senf",
      "olivenöl",
      "pflanzenöl",
      "parmesan"
    ],
    "url": "caesar-salad",
    "images": {}
  },
  {
    "_id": "bKuERhNAvYyrS9tz4",
    "name": "Rumkuchen",
    "url": "rumkuchen",
    "text": "Ich bin nicht alkoholabhängig, ich habe aufgehört zu trinken! ~\n\n#backen #alk #dessert\n\nRumkuchen\n=========\n\n![](rumkuchen/img/unadjustednonraw_thumb_173bc)\n\nTeig\n----\n\n    300g Mehl\n    100g Maisstärke\n    ½ Päckli Backpulver\n    300g Zucker\n    125g Butter\n    125ml Öl\n    4 Eier\n    2 Vanilleschoten\n    125ml Milch\n    125ml Rum\n    50g Walnüsse, gemahlen\n\n1. Eine Gugelhopf-Form einfetten und mit den Walnüssen bestreuen. Ofen auf 180° Grad vorheizen.\n2. Butter weich rühren. Mark aus der Vanilleschote kratzen und zugeben. Weiterrühren, dann Zucker zufügen.\n3. Mehl, Backpulver und Maisstärke hinzufügen, dann Eier und Öl zugeben.\n4. Milch und Rum dazugiessen, in die vorbereitete Form füllen und für ca. 50 Minuten backen.\n\nTränke\n------\n\n    200g Zucker\n    60ml Wasser\n    100g Butter\n    125ml Rum\n\n1. Wasser mit Zucker und Butter aufkochen. Sobald der Zucker gelöst ist, vom Feuer nehmen und Rum zugeben. \n2. Den noch warmen Kuchen in so vielen Durchgängen tränken, bis alles aufgebraucht ist. Geduld.\n3. Kuchen fertig auskühlen lassen, dann auf eine Platte stürzen. Muss nicht sofort gegessen werden, bleibt fein.\n\nEs gibt Leute, die haben dabei keine wasserdichte Backform verwendet und dann beim Tränken geflucht: Alles klebt! ~mr\n",
    "tags": [
      "backen",
      "alk",
      "dessert"
    ],
    "ingr": [
      "mehl",
      "maisstärke",
      "backpulver",
      "zucker",
      "butter",
      "öl",
      "eier",
      "vanilleschoten",
      "milch",
      "rum",
      "walnüsse",
      "zucker",
      "wasser",
      "butter",
      "rum"
    ],
    "images": {
      "unadjustednonraw_thumb_173bc": "R7qhhARDan5LgoYTA"
    }
  },
  {
    "_id": "cAJTmkFJxYcRpCqka",
    "name": "Amaretti",
    "text": "\nRezept von Brigitte Giroud. Sehr süss und bittermandelig. ~\n#backen\n\nAmaretti\n========\n\n    Ca. 30 Stück.\n\n![](amaretti/img/amaretti)\n\n    400g gemahlene Mandeln\n    400g Zucker\n    ½ Päckchen Vanillezucker\n    2 Fläschchen Bittermandelöl\n    2 - 3 Eiweiss\n    Puderzucker zum Wenden\n\n1. Ofen auf 180° vorheizen. Alle Zutaten zu einem klebrigen Teig vermischen. Das Eiweiss muss emfall nicht geschlagen werden.\n2. Daraus entstehen ca. 30 Amaretti.\n3. Amaretti in viel Puderzucker wenden.\n4. Während 10 Minuten bei 180° backen, bis sie aussen knusprig, leicht caramelisiert und innen bestenfalls noch feucht sind.\n\nFeinjustierung\n--------------\n\n- Der Puderzucker wird unansehlich durchsichtig? Die Amaretti zerfliessen zu sehr? Dann ist die Teigmasse zu feucht!\n- Die Amaretti platzen kaum auf und bleiben kugelig? Der Puderzucker hält nicht? Teig zu trocken!\n\n![](amaretti/img/im_ofen)\n",
    "tags": [
      "backen"
    ],
    "ingr": [
      "ca",
      "mandeln",
      "zucker",
      "vanillezucker",
      "bittermandelöl",
      "eiweiss",
      "puderzucker",
      "wenden"
    ],
    "url": "amaretti",
    "images": {
      "im_ofen": "Kw6Qdb5SesLtqGyWW",
      "amaretti": "aTqFeZNPt5SaLFyKL"
    }
  },
  {
    "_id": "cAZPm7sBciu47tENe",
    "name": "Mehlsäure für die polnische Mehlsuppe (Żurek oder Żur)",
    "url": "mehlsaure-fur-die-polnische-mehlsuppe-zurek-oder-zur",
    "text": "#polnisch #suppe #24h+\n\nMehlsäure für die polnische Mehlsuppe (Żurek oder Żur)\n======================================================\n\nRezept für 1 Liter (reicht für ca. 2.4 l fertige Suppe)\n\n    100 g Dinkelvollkornmehl\n    20 g Knoblauch\n\nMehl in ein Glasgefäss geben und mit ca. 0.5 l lauwarmem Leitungswasser\nübergiessen und gut verrühren bis keine Klumpen mehr ersichtlich sind.\nAnschliessend noch mehr Wasser hinzufügen, bis zu einem Gesamtvolumen von\neinem Liter.\n\nDas Gefäss muss so gross sein, dass wenn sich der Schaum gesetzt hat, noch ein\nca. 10 cm grosser Abstand zwischen der Flüssigkeitsoberfläche und dem oberen\nRand des Gefässes besteht. Dies verhindert das Überlaufen der Mehlsäure während\nder Gärung.\n\nKnoblauch in grosse Stücke schneiden und dem Ansatz zugeben und das Gefäss so\nzudecken, dass die Gärungsgase ungehindert entweichen können.\nDie so vorbereitete Mischung bei Raumtemperatur ca. 1 Woche stehen lassen.\nWährend dieser Zeit gelegentlich umrühren.\n",
    "tags": [
      "polnisch",
      "suppe",
      "24h+"
    ],
    "ingr": [
      "dinkelvollkornmehl",
      "knoblauch"
    ]
  },
  {
    "_id": "cwSyuyMP77dkePhvt",
    "name": "Geschnetzeltes à la Ricce",
    "text": "Vom Herrn Perler, denk ~\n#schnell #fleisch #mamaroggo\n\nGeschnetzeltes à la Ricce\n=========================\n\nFür 4-6 Personen\n\n    ½kg Poulet geschnetzelt\n    2 Peperoni, gewürfelt\n    2 Esslöffel Curry\n    2 dl Weisswein\n    2 dl Bouillon\n    1 Pfeffer-Boursin\n    1 dl Rahm\n\n1. Poulet anbraten, beiseite stellen\n2. Peperoni, Curry, Bouillon in die Pfanne und eine Viertelstunde schmoren lassen. So werden die Peperoni fein.\n3. Rahm, Boursin und Weisswein zugeben, abschmecken mit Salz und Pfeffer.",
    "tags": [
      "schnell",
      "fleisch",
      "mamaroggo"
    ],
    "ingr": [
      "poulet",
      "peperoni",
      "curry",
      "weisswein",
      "bouillon",
      "pfeffer",
      "boursin",
      "rahm"
    ],
    "url": "geschnetzeltes-a-la-ricce"
  },
  {
    "_id": "d225HpWt8ZDCbRPDv",
    "name": "Salat FTW",
    "text": "Einer für alles: ~\n\nSalat FTW\n=========\n\n#salat #kalt\n\n\nKnack\n-----\n\n- Croûtons\n- Nüsse\n- Toast, mit Butter bestrichen, zerrupft\n- Chips\n\n\nSüss\n----\n\n- Datteln/Feigen, gehackt\n- Honig\n- Zucker, halt\n- Tomaten\n- Balsamico\n\n\nBooster\n-------\n\n- Sardellen\n- Knoblauch, sagt Papa\n- Gerösteter Sesam ([Gomasio](https://de.wikipedia.org/wiki/Gomasio))\n- طحينة (haha. Tahina)\n- Erdnussbutter\n- Senf\n- König Glutamat",
    "tags": [
      "salat",
      "kalt"
    ],
    "ingr": [],
    "url": "salat-ftw",
    "images": {
      "hangover": "ErdhbzNxgZN3W4dQ9"
    }
  },
  {
    "_id": "dGm8DfeDbxrZLCaPb",
    "name": "Dörrtomatenmus",
    "url": "dorrtomatenmus",
    "text": "#apéro #mengenlos #kalt\n\nDörrtomatenmus\n==============\n\n    Dörrtomaten\n    Mascarpone\n    Basilikum\n    Salz\n    Pfeffer\n    \n![](dorrtomatenmus/img/dsc_0010)\n\n1. Dörrtomaten aus dem öl nehmen, abtropfen. Oder, sollten sie eingesalzen sein: über Nacht wässern.\n2. Zusammen mit dem Mascarpone und Basilikum pürieren\n3. Abschmecken und tunken – etwa mit Chips, Brot oder was auch\n\nHab mal gedacht, 5 min Wässern reiche. Stellt sich heraus: es reicht nicht, total versalzen! ~mr",
    "tags": [
      "apéro",
      "mengenlos",
      "kalt"
    ],
    "ingr": [
      "dörrtomaten",
      "mascarpone",
      "basilikum",
      "salz",
      "pfeffer"
    ],
    "images": {
      "dsc_0010": "BDoJCnqB5vxeoD8p6"
    }
  },
  {
    "_id": "dx5seqp3B3ASMSCbX",
    "name": "Kopytka",
    "url": "kopytka",
    "text": "#polnisch #anti-pasta #vegi\n\nKopytka\n=======\n\n    1 kg Kartoffeln, mehlig kochend\n    2 Gläser Weizenmehl\n    3 gehäufte EL Kartoffelmehl\n    3 Eier\n    wenig Salz\n\n1. Kartoffeln kochen und schälen und durch passevite treiben.\n2. Eier, wenig Salz, Weizen- und Kartoffelmehl dazugeben und zu einem Teig kneten\n3. Den Teig zu einer Rolle von 2.5 cm formen und Klösse schneiden\n4. Klösse im siedenden Wasser kochen bis sie oben aufschwimmen (falls Salz vergessen, Wasser leicht salzen)\n\nEs gibt eine süsse Variante mit Quark statt Kartoffeln, die mit Zucker und Butter in der Pfanne geröstet als (süsses) Abendessen serviert wird. ~st",
    "tags": [
      "polnisch",
      "anti-pasta",
      "vegi"
    ],
    "ingr": [
      "kartoffeln",
      "gläser",
      "weizenmehl",
      "kartoffelmehl",
      "eier",
      "salz"
    ]
  },
  {
    "_id": "eb6gtnGkq6W5y4EFW",
    "name": "Gmüder",
    "url": "gmuder",
    "text": "\nGmüder\n======\n\n#mamaroggo #lokal #hauptgang #fleisch #mengenlos #laktosefrei #skizze\n\n    Rüebli\n    Kartoffeln\n    Bohnen\n    Chnutschen\n    Mayonnaise\n    Wienerli\n    Saucisson\n    Speck\n\n![](gmuder/img/img_3709)\n![](gmuder/img/img_3710)\n![](gmuder/img/img_3706)\n![](gmuder/img/img_3705)\n",
    "tags": [
      "mamaroggo",
      "lokal",
      "hauptgang",
      "fleisch",
      "mengenlos",
      "laktosefrei",
      "skizze"
    ],
    "ingr": [
      "rüebli",
      "kartoffeln",
      "bohnen",
      "chnutschen",
      "mayonnaise",
      "wienerli",
      "saucisson",
      "speck"
    ],
    "images": {
      "img_3709": "eWpkfPK2cmqfXggtF",
      "img_3705": "HcWiMRSgghqR7SZKm",
      "img_3706": "qrtkL2n89aGCvjuMg",
      "img_3710": "QaZKZCJYxzJDCny3T"
    }
  },
  {
    "_id": "g2Lk6L6iBwk9GXJgK",
    "name": "Moscow Mule",
    "url": "moscow-mule",
    "text": "#alk #getränk\n\nMoscow Mule\n===========\n\n    6 cl Vodka\n    2 cl frischer Limettensaft\n    12 cl Ginger Beer\n    1 Spritzer Angostura Bitter\n    \n1. Limettensaft und Vodka mischen\n2. Eis zugeben, schütteln\n3. Ingwerbier und Bitter dazu, fertig\n\nGarnituren: Limettenschnitz, Gurke (?!)",
    "tags": [
      "alk",
      "getränk"
    ],
    "ingr": [
      "vodka",
      "limettensaft",
      "ginger",
      "beer",
      "spritzer",
      "angostura",
      "bitter"
    ]
  },
  {
    "_id": "hJL4bn27tWusYPdau",
    "name": "Müscheli mit Joghurt, Erbsen und Chili",
    "url": "muscheli-mit-joghurt-erbsen-und-chili",
    "text": "#vegi #hauptgang #schnell\n\nJoghurt, im Ärnscht? ~\n\nMüscheli mit Joghurt, Erbsen und Chili\n========================================\n\n    Menge für 6 Esser\n    \nAus dem Jerusalem-Kochbuch vom Herrn Ottolenghi, via [elbmadame](http://elbmadame.de/kochbuch-jerusalem/).\n\n    500g Joghurt\n    500g Müscheli\n    500g Erbsen\n    1½ dl Olivenöl\n    4 Knoblauchzehen\n    60g Pinienkerne\n    40g Basilikum\n    2 EL Kirmizi Biber oder Chiliflocken\n    250g Feta\n    \n\n![](muscheli-mit-joghurt-erbsen-und-chili/img/muescheli)\n\n1. 100g Erbsen zusammen mit 1 dl Olivenöl und dem Knoblauch pürieren. \n2. Mus zum Joghurt in eine Schüssel geben, derweil die Teigwaren übertun.\n3. Das restliche Öl mit den Pinienkernen und dem Chili in der Pfanne rösten, bis sie goldbraun sind und die Flüssigkeit rötlich gefärbt ist.\n5. Falls die Erbsen noch gefroren sind, diese kurz vor Ende der Teigwarenkochzeit zugeben. Abgiessen und zur Joghurtsauce geben. Dabei acht geben, dass das Ganze bloss warm und nicht zu heiss wird. Sonst gerinnt der Joghurt nämlich.\n6. Mit Salz und Pfeffer abschmecken, Basilikum zugeben und den Feta darüberkrümeln.\n\n![](muscheli-mit-joghurt-erbsen-und-chili/img/nah)\n![](muscheli-mit-joghurt-erbsen-und-chili/img/unadjustedraw_thumb_146e8)",
    "tags": [
      "vegi",
      "hauptgang",
      "schnell"
    ],
    "ingr": [
      "menge",
      "esser",
      "joghurt",
      "müscheli",
      "erbsen",
      "olivenöl",
      "knoblauchzehen",
      "pinienkerne",
      "basilikum",
      "kirmizi",
      "biber",
      "chiliflocken",
      "feta"
    ],
    "images": {
      "muescheli": "BD6u5rWLLWwDKrPJg",
      "nah": "qpvAoBMtWjaX8743A",
      "unadjustedraw_thumb_146e8": "dibojqZJW966apoBC"
    }
  },
  {
    "_id": "hsKdynAT59aqXdLa6",
    "name": "Pommes Fritz",
    "url": "pommes-fritz",
    "text": "#vegi #frittiert #mengenlos\n\nPommes Fritz\n=============\n\nMengenangaben sind bei so einem Rezept sowieso müssig.\n\n    Kartoffeln (mehlig)\n    Frittieröl\n    Salz\n    \n![](pommes-fritz/img/1h5snf4qbuvaitnabzqpq_thumb_18f2a)\n\n\n1. Kartoffeln evtl. schälen, schneiden.\n2. Etwa eine halbe Stunde in kaltem Wasser liegen lassen. Das wäscht die überschüssige Stärke aus. Danach auf einem Blech mit Tuch trocknen.\n3. In der Fritteuse bei 160° portionenweise frittieren, bis sie gar werden, aber noch keine Farbe angenommen haben. Auf einem mit Küchenpapier ausgestatteten Blech abtropfen und zwischenlagern.\n4. Wenn alles bereit ist: Fritteuse auf 180° stellen und während ca. 2 Minuten fertig frittieren. Salzen und gut.\n\n![](pommes-fritz/img/unadjustednonraw_thumb_181ad)\n",
    "tags": [
      "vegi",
      "frittiert",
      "mengenlos"
    ],
    "ingr": [
      "kartoffeln",
      "frittieröl",
      "salz"
    ],
    "images": {
      "unadjustednonraw_thumb_181ad": "D267h8EqsMqL6vK5p",
      "1h5snf4qbuvaitnabzqpq_thumb_18f2a": "wJ9Lbqo6J3BeEPnSC"
    }
  },
  {
    "_id": "iAf4WXPL7ppzQZfRv",
    "name": "Zimtschnecken",
    "url": "zimtschnecken",
    "text": "#backen #imvoraus #dessert\n\nZimtschnecken\n=============\n\n\n![](zimtschnecken/img/unadjustednonraw_thumb_1b40f)\n\nTeig\n----\n\n    150g Butter\n    5dl Milch\n    1 Würfel Hefe\n    850g Mehl\n    100g Zucker\n    ½ TL Salz\n    1 EL Kardamom\n    \n1. Butter schmelzen. Nebenbei Mehl, Zucker, Salz und Kardamom vermischen.\n2. Milch zur geschmolzenen Butter geben. Nicht heisser als handwarm werden lassen, dann Hefe zugeben und gut verrühren.\n3. Flüssig und Staubig mischen, kneten, 1/2h gehen lassen.\n    \n\nFüllung\n-------\n\n    150g Butter\n    100g Zucker\n    2 EL Zimt\n    1 Ei\n    Hagelzucker\n    \n1. Butter schmelzen. Derweil den Teig in zwei Hälften teilen und jeweils backblechgross auswallen.\n2. Teige mit Butter, Zucker und Zimt versehen. Das geht am besten per Pinsel, sobald die Butter wieder etwas abgekühlt ist.\n3. Auf der breiten Seite einrollen. Das letzte Fingerbreit befeuchten, damit der Wickel schön zusammenhält.\n4. In Scheiben schneiden (mit einem nassen, sauberen Messer) und auf ein Blech geben.\n5. Nochmals 1/2h gehen lassen, dann mit Ei bepinseln und Hagelzucker bestreuen. 10 min bei 200° backen. Nicht zu lange, sonst werden sie furztrocken!\n\n\n![](zimtschnecken/img/unadjustednonraw_thumb_1aebe)\n![](zimtschnecken/img/unadjustednonraw_thumb_1aebf)\n![](zimtschnecken/img/unadjustednonraw_thumb_1b0a6)\n\n\n\n\n",
    "tags": [
      "backen",
      "imvoraus",
      "dessert"
    ],
    "ingr": [
      "butter",
      "milch",
      "würfel",
      "hefe",
      "mehl",
      "zucker",
      "salz",
      "kardamom",
      "butter",
      "zucker",
      "zimt",
      "ei",
      "hagelzucker"
    ],
    "images": {
      "unadjustednonraw_thumb_1b40f": "aRbbfynEhM97o9J9A",
      "unadjustednonraw_thumb_1b0a6": "DEGjGfXgRsKrGCGyD",
      "unadjustednonraw_thumb_1aebe": "9Rk9PQgLsTS8e35h7",
      "unadjustednonraw_thumb_1aebf": "foAj8GbJ32gZY7Bno"
    }
  },
  {
    "_id": "in4uc276YEpeNm4EZ",
    "name": "Räuber-Pizza",
    "text": "Das sind ja bloss Griessschnitten mit Tomatensauce! Fand auch der Bub, der tobte – doch die Eltern haben blitzschnell reagiert und das Gericht umbenannt: ~\n\n#vegi #anti-pasta #lokal #mamaroggo\n\nRäuber-Pizza\n============\n\nFür 4 Personen, 40 min.\n\nGriessschnitten\n------------\n\n    1½ l Milch\n    100 g Butter\n    2 TL Salz\n    Pfeffer, Muskat\n    300 g Griess\n    150 g Parmesan\n    3 Eier\n    \n1. Milch, halbe Butter, Salz, Pfeffer und Muskat aufkochen\n2. Griess langsam unter rühren einrieseln lassen. Sonst klumpts!\nCa. 10 min. kochen.\n3. Leicht auskühlen lassen, 2/3 vom Parmesan und Eier darunterrühren. Auf einem gefetteten Blech etwa 2 cm dick ausstreichen. Restliche Butter und Parmesan darübergeben und 20 min. bei 220° gratinieren.\n\n\nTomatensauce\n------------\n\n    500g Pelati\n    1 Knoblauchzehe\n    Olivenöl\n    Basilikum, gehackt\n    Salz, Pfeffer, Zucker\n    \n1. In einer Pfanne Knoblauch im Olivenöl anschwitzen. Der sollte aber keine Farbe annehmen, sonst wird's bitter.\n2. Pelati zugeben, 20 min köcheln.\n3. Basilikum beifügen. Mit Salz, Pfeffer und Zucker abschmecken. Auf die Griesschnitten geben!\n\nZu Zeiten von Betty Bossi galt solches Geköch offenbar als schnell und unkompliziert: \"…war das obligate Menu an Wasch- und Useputz-Tagen.\"  ~",
    "tags": [
      "vegi",
      "anti-pasta",
      "lokal",
      "mamaroggo"
    ],
    "ingr": [
      "milch",
      "butter",
      "salz",
      "pfeffer",
      "muskat",
      "griess",
      "parmesan",
      "eier",
      "pelati",
      "knoblauchzehe",
      "olivenöl",
      "basilikum",
      "salz",
      "pfeffer",
      "zucker"
    ],
    "url": "rauber-pizza"
  },
  {
    "_id": "inW24JoaGQ8PxPSBq",
    "name": "Lasagne-Notizen",
    "url": "lasagne-notizen",
    "text": "Lasagne-Notizen\n===============\n\n- Auswalldicke Stufe 4\n- 200g Hackihacki, vernünftig verkocht\n- vs. 150g Hartweizen + 2 Eia\n- 4dl Béchamel\n\nEher auf der milch/fleischigen Seite, jetzt so von Smack und so. Und bitz trocken. Mehr Sauer hätte auch gepasst. Also nächstes Mal doch Tomaten reinkippen? Aber geil wars dann schon. ~mr\n\n![](lasagne-notizen/img/engelberg-2019-209)\n*Catherines 24h-Lasagne*\n\n![](lasagne-notizen/img/unadjustednonraw_thumb_1a57d)\n\n",
    "tags": [],
    "ingr": [],
    "images": {
      "unadjustednonraw_thumb_1a57d": "DMjcJ9vvtaWbCA22F",
      "engelberg-2019-209": "gf3HKhsixS9nKdtmr"
    }
  },
  {
    "_id": "kPJohTvXZXp77ur7S",
    "name": "Conchiglie mit Rosenkohl und Speck",
    "url": "conchiglie-mit-rosenkohl-und-speck",
    "text": "Kohl mit Speck geht immer. Hier die bittere Version: ~\n\n#fleisch #hauptgang #laktosefrei\n\nConchiglie mit Rosenkohl und Speck\n==================================\n\n    2 Personen\n    \nDauert ca. ¾ Stunde.\n\n    250g Muschel-Teigwaren\n    250g Rosenkohl\n    150g Speckwürfeli\n    Knoblauchzehe\n    Olivenöl\n    Pfeffer\n    Zucker\n    \n![](conchiglie-mit-rosenkohl-und-speck/img/wip)\n\n1. Speckwürfeli in etwas Olivenöl anbraten. Derweil Röseli putzen und vierteln.\n2. Knoblauch zugeben, andünsten, dann Röseli rein. Wasser aufsetzen, warten bis der Rosenkohl richtig gar ist: 30 Minuten oder so!\n3. Teigwaren kochen. Sauce abschmecken mit Salz, Pfeffer und Zucker weil bitter.\n4. Beim Zusammensetzen vielleicht noch etwas Teigwarenkochwasser zugeben. Olivenöl auch. Tüchtig verrühren, damit sich die Röseli-Viertel schön in den Muscheln verfangen, das ist der Witz daran!\n\n\n![](conchiglie-mit-rosenkohl-und-speck/img/ctw9uqbjqjotgst5usffw_thumb_19632)",
    "tags": [
      "fleisch",
      "hauptgang",
      "laktosefrei"
    ],
    "ingr": [
      "personen",
      "muschel",
      "teigwaren",
      "rosenkohl",
      "speckwürfeli",
      "knoblauchzehe",
      "olivenöl",
      "pfeffer",
      "zucker"
    ],
    "images": {
      "wip": "r5JdfkjdtmCrT2gay",
      "ctw9uqbjqjotgst5usffw_thumb_19632": "ruRGrHN6hEWzzfSNA"
    }
  },
  {
    "_id": "kSq3nH6CaBF85DA2G",
    "name": "Zucchetti in fein",
    "url": "zucchetti-in-fein",
    "text": "#vegi #mengenlos #leicht #beigemüse #kalt\n\nSüss und salzig und minzig und nussig: Es bleibt und bleibt lustig.~\n\nZucchetti in fein\n=================\n\n    Zucchetti\n    Pinienkerne\n    Salz, Pfeffer\n    Minze\n    Olivenöl\n    Sultaninen\n\n![](zucchetti-in-fein/img/nmllfs6vteirmqv4kmhxdg_thumb_189ab)\n\n1. Zucchetti in feine Ringe schneiden, auf ein Blech geben, mit Olivenöl beträufeln und bei 220°C im Ofen backen.\n2. Derweil Minze hacken und die Pinienkerne in einer Pfanne rösten.\n3. Alles vermengen und abschmecken mit Salz und Pfeffer. Isst sich lauwarm und kalt gut.",
    "images": {
      "nmllfs6vteirmqv4kmhxdg_thumb_189ab": "N8MiuEvNFQ9rykEWu"
    },
    "tags": [
      "vegi",
      "mengenlos",
      "leicht",
      "beigemüse",
      "kalt"
    ],
    "ingr": [
      "zucchetti",
      "pinienkerne",
      "salz",
      "pfeffer",
      "minze",
      "olivenöl",
      "sultaninen"
    ]
  },
  {
    "_id": "ns7gcCceECKPXCbdo",
    "name": "Spaghetti Carbonara",
    "text": "Merets kompromisslose Variante ohne Rahm ~\n#hauptgang #schnell #laktosefrei\n\nSpaghetti Carbonara\n===================\n\n4 Personen.\n\n    500g Spaghetti\n    4 Eigelb\n    100g Speck\n    Knoblauch\n    Pfeffer, Salz\n    Bratbutter\n    \n![](spaghetti-carbonara/img/img_5098)\n\n1. Wasser ansetzen, Knoblauch und Speck in etwas Bratbutter anschwitzen\n2. Spaghetti kochen, etwas Wasser zur Seite stellen, Eigelbe abtrennen und verrühren.\n3. Teigwaren abgiessen, mit Eigelb und Speck vermischen, passende Menge Wasser zugeben, damits schön flutscht.\n\n![](spaghetti-carbonara/img/unadjustednonraw_thumb_1b3d7)\n\n\nEiweissverwertung?\n------------------\n\n- [Meringues](meringues)\n- [Café Glacé Grand Marnier](cafe-glace-grand-marnier)\n- Whiskey Sours\n\n",
    "tags": [
      "hauptgang",
      "schnell",
      "laktosefrei"
    ],
    "ingr": [
      "spaghetti",
      "eigelb",
      "speck",
      "knoblauch",
      "pfeffer",
      "salz",
      "bratbutter"
    ],
    "url": "spaghetti-carbonara",
    "images": {
      "mtuipokaqpcab5jk0tzsla_thumb_1999b": "maGD5NiZ42a6LexuS",
      "unadjustednonraw_thumb_1b3d7": "9mWurfxMDEruxhYX8",
      "img_5098": "ymYs3nbmxaBEoqRk3"
    }
  },
  {
    "_id": "p4N8CSvXGHQFbz2SG",
    "name": "Teigwaren mit roten Linsen",
    "url": "teigwaren-mit-roten-linsen",
    "text": "#vegi #hauptgang #mamaroggo\n\nTeigwaren mit roten Linsen\n==========================\n\n4 Personen, ca. ½h.\n\n    2 Zwiebeln\n    Peperoncini\n    Etwas Öl\n    1 Knoblauchzehe\n    250g rote Linsen\n    Peterling\n    2dl Rahm\n    1 Würfel Hühnerbouillon\n    500g Teigis\n    \n1. Zwiebeln, Peperoncini und Knoblauch hacken und im Öl andünsten. Wasser aufsetzen.\n2. Rote Linsen, 3dl Wasser und Bouillon zugeben. Circa 20 Minuten köcheln lassen, dann sind die Linsen gar.\n3. Rechtzeitig die Teigwaren kochen. Kurz vor gut: Gehackten Peterling und Rahm zu den Linsen geben und das ganze abschmecken. Mit den Teigwaren mischen.",
    "tags": [
      "vegi",
      "hauptgang",
      "mamaroggo"
    ],
    "ingr": [
      "zwiebeln",
      "peperoncini",
      "etwas",
      "öl",
      "knoblauchzehe",
      "linsen",
      "peterling",
      "rahm",
      "würfel",
      "hühnerbouillon",
      "teigis"
    ]
  },
  {
    "_id": "pr3Lpvawd8zWvbiFa",
    "name": "Zucchettigratin mit Oliven und Kapern",
    "url": "zucchettigratin-mit-oliven-und-kapern",
    "text": "#hauptgang #imvoraus #vegi #anti-pasta\n\n\nZucchettigratin mit Oliven und Kapern\n=====================================\n\n    4 Personen\n\nHier kommt dann ein Föteli\n\n    2 Zehen Knoblauch\n    1 Zwiebel\n    Olivenöl\n    250g Tomaten\n    Salz, Pfeffer\n    Essig, Zucker\n    1kg Zucchetti\n    150g Mozzarella\n    Oregano, Basilikum, Peterling\n    50g Kapern\n    50g Oliven\n    50g Parmesan\n    \n1. Zwiebeln und Knoblauch hacken und in Olivenöl andünsten. Derweil Ofen auf 200 Grad stellen und Zucchetti in Scheiben schneiden.\n2. Tomaten würfeln, zugeben und kurz mitdünsten. Abschmecken mit Essig, Salz, Pfeffer und – falls nötig – Zucker.\n3. Eine Auflaufform mit Öl bestreichen und Sauce reingeben. Die Hälfte der Zucchetti darüberlegen.\n4. Mozzarella darauf verteilen. Kräuter hacken und darübergeben, mit den restlichen Zucchettischeiben abschliessen.\n5. Oliven und Kapern mit dem Parmesan vermischen und über den Gratin geben. Mit Olivenöl beträufeln und für 40 Minuten überbacken.\n\nDazu passt Bulgur super. Butter nicht vergessen!",
    "tags": [
      "hauptgang",
      "imvoraus",
      "vegi",
      "anti-pasta"
    ],
    "ingr": [
      "personen",
      "knoblauch",
      "zwiebel",
      "olivenöl",
      "tomaten",
      "salz",
      "pfeffer",
      "essig",
      "zucker",
      "zucchetti",
      "mozzarella",
      "oregano",
      "basilikum",
      "peterling",
      "kapern",
      "oliven",
      "parmesan"
    ]
  },
  {
    "_id": "rZoH86vnC9YH3jXGZ",
    "name": "Bierteig",
    "url": "bierteig",
    "text": "Bierteig\n========\n\n#frittiert #apéro #fisch #anti-pasta\n\n    300g Mehl\n    1 TL Salz\n    4 Eier\n    3dl Bier\n1. Salz, Mehl und Eigelbe in einer Schüssel mischen, ½h quellen lassen.\n2. Vor dem Frittieren: Eiweisse schlagen und darunterrühren\n\nYeah, Fischknusperli:\n\n![](bierteig/img/img_5435)\n",
    "tags": [
      "frittiert",
      "apéro",
      "fisch",
      "anti-pasta"
    ],
    "ingr": [
      "mehl",
      "salz",
      "eier",
      "bier"
    ],
    "images": {
      "img_5435": "5R4iBD6EopRNRKre3"
    }
  },
  {
    "_id": "utyLBPfcYJq5Pqen4",
    "name": "Wurst-Pasta",
    "url": "wurst-pasta",
    "text": "#schnell #hauptgang #fleisch #laktosefrei\n\nKomm, wir schlachten ein Wursttier und machen Hackfleisch draus! ~\n\nWurst-Pasta\n===========\n\nFür 4 Personen, 20 min.\n\n![](wurst-pasta/img/to3wueotrm9lad5c34jaq_thumb_168c2)\n\n    600g Salsiccia\n    500g Fusilli\n    1 Glas Weisswein\n    2 TL Fenchelsamen\n    Chiliflocken\n    1 Zitrone\n    Peterling, fein gehackt\n    Parmesan\n\n1. Teigwarenwasser ansetzen. Die Fenchelsamen im Mörser zerquetschen. Schale der Zitrone abreiben und Saft erpressen.\n2. Wurst aus der Haut holen und in einer Bratpfanne mit etwas Olivenöl anbraten. Mit dem Bratschüfeli zerkleinern, bis es fast wie Hackfleisch aussieht. \n3. Sobald die Wurst etwas Farbe angenommen hat, Fenchelsamen und Chiliflocken zugeben und 10 Minuten weiterbraten bis es knusprig wird. \n4. Oregano und Wein zugeben und einkochen. Schale und Saft der Zitrone beigeben und derweil die Teigwaren kochen.\n5. Teigwaren abgiessen und dabei etwas Kochwasser zur Seite stellen. Mit der Wurstmischung vermengen, so dass das Hack schön zwischen den Fusilli-Rillen stecken bleibt.\n6. Zum Abschluss den Peterling, etwas Kochwasser und Parmesan zugeben.",
    "tags": [
      "schnell",
      "hauptgang",
      "fleisch",
      "laktosefrei"
    ],
    "ingr": [
      "salsiccia",
      "fusilli",
      "glas",
      "weisswein",
      "fenchelsamen",
      "chiliflocken",
      "zitrone",
      "peterling",
      "parmesan"
    ],
    "images": {
      "to3wueotrm9lad5c34jaq_thumb_168c2": "D3uZ6sQy4oo6CCaeo"
    }
  },
  {
    "_id": "vZpoC8QxhrhSPdC3n",
    "name": "Bananen-Härzbräzele",
    "url": "bananen-harzbrazele",
    "text": "#backen #lokal #hauptgang #zvieri\n\nBei Gemma zählte sowas als Zmittag. Aber schliesslich war da ja noch Apfelmus dabei ~\n\nBananen-Härzbräzele\n===================\n\n    ca. 8 Stück:\n    125g Butter\n    1 Päckli Vanillezucker\n    75g Zucker\n    2 Bananen\n    3 Eier\n    Salz\n    2 TL Backpulver\n    350g Mehl\n    1 dl Milch\n    \n![](bananen-harzbrazele/img/img_3104)\n\n1. Butter, Bananen, Vanillezucker und Zucker cremig rühren\n2. Eier zugeben und vermischen.\n3. Mehl und Backpulver vermischen und portionenweise dazu\n4. Milch zugeben bis die Konsistenz gut ist. Diese sollte am dünnen Ende von Caketeig-mässig sein. \n\nBeim letzten Mal waren sie gut, aber etwas feucht. Gegend Ende dann noch etwas Mehl dazugegeben (geschätzt 100g der 350g von oben) und dann waren die Waffeln noch grad mal fluffiger. Dh. die 350g sind noch zu bestätigen! ~mr\n\n\n![](bananen-harzbrazele/img/img_2698)\n",
    "tags": [
      "backen",
      "lokal",
      "hauptgang",
      "zvieri"
    ],
    "ingr": [
      "butter",
      "vanillezucker",
      "zucker",
      "bananen",
      "eier",
      "salz",
      "backpulver",
      "mehl",
      "milch"
    ],
    "images": {
      "img_2698": "YZcEBxBYKFGy9sfa8",
      "img_3104": "xcysEGFzg8wJCHKHb"
    }
  },
  {
    "_id": "vx86XneynmFgHYqBM",
    "name": "Winterpasta",
    "text": "Es ist Winter. Nichts hat Saison. Zeit für die Sardellen- und Kichererbsendosen! ~\n#hauptgang #vegisierbar #fisch #mamaroggo #laktosefrei\n\nWinterpasta\n===========\n\n    4 Personen.\n\nAm längsten geht wohl das Broccolirüsten. 20 min.\n\n    ½ kg Broccoli\n    1 Knoblauchzehe\n    1 roter Peperoncino\n    1 kleines Döschen Sardellenfilets, ca. 27g\n    1 Dose Kichererbsen, 240g\n    300g Öhrchenpasta (Orecchiette)\n    Salz, Pfeffer\n    5 EL Olivenöl\n    1 Zweig Petersilie\n    \n\n![](winterpasta/img/dsc_0001)\n\n1. Broccoli rüsten, Stengel in kleine Scheiben schneiden. Knoblauch fein hacken. Peperoncino halbieren, entkernen und fein hacken.\n2. Pasta übertun.\n3. Knoblauch und Peperoncino mit Olivenöl andünsten, bis der Knoblauch leicht Farbe annimmt. Sardellen beifügen, schmelzen lassen (das tun sie tatsächlich!).\n4. Broccoli zusammen mit etwas Teigwarenkochwasser dazugeben.\n5. Die Teigwaren und der Broccoli sind hoffentlich gleichzeitig gar. Alles mischen, mit Pfeffer und Petersilie bestreuen.\n\nWikipedia-Entdeckung: Offenbar aus Apulien, dort mit [Stängelkohl](http://de.wikipedia.org/wiki/Stängelkohl#K.C3.BCche) statt Broccoli gekocht. ~\n\nZu fad? Mehr Sardellen helfen. Mehr Öl sowieso. ~mr<br>\n\n![](winterpasta/img/img_2543)\n",
    "tags": [
      "hauptgang",
      "vegisierbar",
      "fisch",
      "mamaroggo",
      "laktosefrei"
    ],
    "ingr": [
      "personen",
      "broccoli",
      "knoblauchzehe",
      "peperoncino",
      "sardellenfilets",
      "kichererbsen",
      "öhrchenpasta",
      "orecchiette",
      "salz",
      "pfeffer",
      "olivenöl",
      "petersilie"
    ],
    "url": "winterpasta",
    "images": {
      "img_2543": "D9j7mHoNzN6GmzjBK",
      "dsc_0001": "7nojHNT89nqXm5qwP"
    }
  },
  {
    "_id": "wWtKtKDnCpurxLrZX",
    "name": "Papet Vaudois",
    "text": "Papet Vaudois\n=============\n\n#hauptgang #lokal #mamaroggo\n\n    Für 4 Personen.\n\nDauert gut 1h\n\n    2 Zwiebeln\n    1 kg Lauch\n    1/2 kg mehligkochende Kartoffeln\n    1 EL Butter\n    2 dl Weisswein\n    1 Lorbeerblatt\n    3 dl Hühnerbouillon\n    1 TL Weissweinessig\n    2 Saucisson\n    Rahm\n\n1. Zwiebeln fein hacken. Lauch in ca. 2 cm lange Stücke schneiden. Kartoffeln in 2–3 cm grosse Würfel schneiden.\n2. Butter erhitzen. Zwiebeln und Lauch bei mittlerer Hitze andünsten. Mit Bouillon ablöschen. Fast vollständig einkochen lassen. Kartoffeln und Lorbeerblatt beigeben. Wein dazugiessen.\n3. Inzwischen je 1 Zahnstocher in die Wurstenden stecken, damit die Würste beim Garen nicht platzen. Würste in noch kaltes Wasser geben. Knapp unter dem Siedepunkt ziehen lassen.\n4. Würste und Papet ca. 40 min kochen. 10 min vor Ende der Kochzeit Essig beifügen und mitkochen. Mit Salz und Pfeffer abschmecken, nach Bedarf aufrahmen.\n\n\nLorbeerblatt nicht zerbröseln, Verschluckgefahr… ~mr",
    "tags": [
      "hauptgang",
      "lokal",
      "mamaroggo"
    ],
    "ingr": [
      "für",
      "personen",
      "zwiebeln",
      "lauch",
      "kartoffeln",
      "butter",
      "weisswein",
      "lorbeerblatt",
      "hühnerbouillon",
      "weissweinessig",
      "saucisson",
      "rahm"
    ],
    "url": "papet-vaudois",
    "images": {}
  },
  {
    "_id": "wY5RHERGr2y2EYzZa",
    "name": "Focaccia",
    "url": "focaccia",
    "text": "Und jetzt singen wir alle gemeinsam das Fo-Cha-Cha-Lied! ~\n\n#backen #imvoraus #beigemüse #apéro\n\nFocaccia\n========\n\nDer Teig geht zweimal: 3h vor Auftischen anfangen.\n\n![](focaccia/img/dsc_0064)\n\n    1 kg Mehl\n    1 Würfel Hefe\n    Wasser, lauwarm\n    Olivenöl\n    Rosmarin\n    Salz\n    \n1. Hefe mit einem Gutsch Wasser anrühren, je nach Eile mit etwas Zucker füttern. Bis auf 6,5 dl auffüllen.\n2. In einer Schüssel Mehl mit Salz vermischen. Hefewasser sowie Olivenöl (nach Belieben) zugeben. 10 Minuten kneten.\n3. Teigkugel auf ein gefettetes Blech geben und ca. 1½h gehen lassen.\n4. Teig auf Blechformat ausziehen, nochmals knapp eine Stunde gehen lassen. Ofen rechtzeitig auf 220° vorheizen.\n5. Olivenöl, Salz applizieren und die typischen Mulden reindrücken. Backen für ca. 20 Minuten, dabei kurz vor Ende die Rosmarinnadeln darübergeben (so verkohlen die nicht).\n\nTrockenhefe scheint auch zu klappen ~ mr\n\nKümmel statt Rosmarin fägt auch ~nr",
    "tags": [
      "backen",
      "imvoraus",
      "beigemüse",
      "apéro"
    ],
    "ingr": [
      "mehl",
      "würfel",
      "hefe",
      "wasser",
      "olivenöl",
      "rosmarin",
      "salz"
    ],
    "images": {
      "dsc_0064": "JJbkopPu3XJKwv725"
    }
  },
  {
    "_id": "wqzXTLG9zgvRfAta4",
    "name": "Butterbier",
    "url": "butterbier",
    "text": "\"more of a liquid meal\" ~\n\nButterbier\n==========\n\n#alk #getränk\n\nVom [Drink-Laberi](https://www.youtube.com/watch?v=fhCKQLWZuK4) des Vertrauens.\n\n    1½ l dunkles Ale\n    2cm Ingwer\n    ½ Muskatnuss\n    6 Nägeli\n    225g Vollrohrzucker\n    5 Eigelb\n    100g Butter\n    \n![](butterbier/img/img_3771)\n\n1. Ale erhitzen. Nicht allen Alk wegkochen!\n2. Währenddessen Ingwer und Muskat reiben, mit Nägeli (zerdrückt) zum Ale geben.\n3. Eigelbe und Zucker mixen bis hell.\n4. Eimasse zum Ale geben und Butter dazurühren\n\nNächstes mal probieren: getrockneten Ingwer.~mr\n\n\n",
    "tags": [
      "alk",
      "getränk"
    ],
    "ingr": [
      "ale",
      "ingwer",
      "muskatnuss",
      "nägeli",
      "vollrohrzucker",
      "eigelb",
      "butter"
    ],
    "images": {
      "img_3771": "Py9WafpFBgTHprBYy",
      "img_0858": "6RhwBuAGjFceoX2bC"
    }
  },
  {
    "_id": "xTLr3XFPrw854P8GH",
    "name": "Gin Basil Smash",
    "url": "gin-basil-smash",
    "text": "Gesehen in der [Dachkammer](http://www.dachkammer.com/). ~\n\n#getränk #alk\n\nGin Basil Smash\n===============\n\n    6cl Gin\n    2cl Zitronensaft\n    2cl Zuckersirup\n    8 Basilikumblätter\n    Eis\n    \n1. Basilikum im Mörser quetschen.\n2. Zusammen mit Eiswürfeln und den restlichen Zutaten in ein Konfiglas geben. Schütteln bis kalt.\n3. Durch ein Sieb in ein Glas geben. Anrichten mit Basilikumblättli und Eis, sagt man.\n\n![](gin-basil-smash/img/hangover)",
    "tags": [
      "getränk",
      "alk"
    ],
    "ingr": [
      "gin",
      "zitronensaft",
      "zuckersirup",
      "basilikumblätter",
      "eis"
    ],
    "images": {
      "hangover": "ErdhbzNxgZN3W4dQ9"
    }
  },
  {
    "_id": "xfGb7qzZMuFtHzEqX",
    "name": "Krautfleckerl",
    "url": "krautfleckerl",
    "text": "#lokal #hauptgang\n\nKrautfleckerl\n=============\n\n    Für 6.\n\nDauert ca. ½h.\n\n    600g Kabis\n    150g Speck\n    1 grosse Zwiebel\n    2 Knoblauchzehen\n    1 Bund Peterling\n    2dl Bouillon\n    Olivenöl\n    Paprika\n    Salz, Pfeffer\n    200g Crème fraîche\n    1 dl Rahm\n    500g Krawättli\n\n![](krautfleckerl/img/img_5430)\n\n1. Speck in einer grossen Pfanne und Öl anbraten. Währenddessen den Kabis in Streifen schneiden, Zwiebel und Knoblauch hacken.\n2. Gehacktes und Geschnittenes zum Speck geben. Mit Paprika, Salz und Pfeffer würzen. Bouillon dazugiessen und 20 Minuten zugedeckt dünsten.\n3. Teigis kochen. Crème fraîche, Rahm und gehackten Peterling zugeben. Nochmal erhitzen, fertig.",
    "tags": [
      "lokal",
      "hauptgang"
    ],
    "ingr": [
      "für",
      "kabis",
      "speck",
      "zwiebel",
      "knoblauchzehen",
      "peterling",
      "bouillon",
      "olivenöl",
      "paprika",
      "salz",
      "pfeffer",
      "cr",
      "rahm",
      "krawättli"
    ],
    "images": {
      "img_5430": "oonq55QfN8Ky9Nmss"
    }
  },
  {
    "_id": "zcoY5FDf2vNiJuDCi",
    "name": "Spätzli-Pfanne",
    "url": "spatzli-pfanne",
    "text": "#schnell #mamaroggo #skizze\n\nSpätzli-Pfanne\n==============\n\n    500g Poulet\n    3-Stern-Gewürz\n    3-4 Rüebli\n    3 Stangen Lauch\n    1½ kg Spätzli\n    Weisswein\n    Cayennepfeffer\n    5dl Halbrahm\n    etwas Bouillon\n    \n\n1. Braten, bla bla",
    "tags": [
      "schnell",
      "mamaroggo",
      "skizze"
    ],
    "ingr": [
      "poulet",
      "stern",
      "gewürz",
      "rüebli",
      "lauch",
      "spätzli",
      "weisswein",
      "cayennepfeffer",
      "halbrahm",
      "bouillon"
    ]
  },
  {
    "_id": "CzqqrNoQZKbqhaPZt",
    "name": "Pingu-Chueche",
    "url": "pingu-chueche",
    "text": "#hauptgang #vegi #mamaroggo #anti-pasta\n\nWieder so eine komische Bezeichnung. Diesmal aber von Betty Bossi höchstpersönlich: ~\n\nPingu-Chueche\n=============\n\n    4 Personen\n    \nInnerhalb von 1½ h auf dem Tisch.\n\n![](pingu-chueche/img/img_4966)\n\nTeig\n----\n\n    3½ dl Wasser\n    ½ Hefewürfel\n    ½ EL Salz\n    ½ kg Mehl\n    ½ dl Olivenöl\n    \n1. Hefe in lauwarmes Wasser geben und auflösen\n2. Mit Mehl, Salz und Olivenöl zu einem glatten Teig verkneten\n3. Eine gute halbe Stunde gehen lassen. Derweil:\n    \nBelag\n-----\n\n    Knoblauch\n    500g Spinat\n    Muskatnuss\n    2 Eier\n    250g Mozzarella\n    \n1. Knoblauch in etwas Olivenöl andünsten\n2. Spinat dazu (gefroren oder frisch), würzen mit Salz, Pfeffer und Muskatnuss.  \nSobald der Teig bereit ist:\n3. Teig auf Backblech-Grösse auswallen und belegen mit Spinat, Mozzarella und verquirlten Eiern\n4. In den Ofen bei 220° und nun 20 Minuten geduldig warten:\n\n![](pingu-chueche/img/img_4960)\n\n\n",
    "tags": [
      "hauptgang",
      "vegi",
      "mamaroggo",
      "anti-pasta"
    ],
    "ingr": [
      "personen",
      "wasser",
      "hefewürfel",
      "salz",
      "mehl",
      "olivenöl",
      "knoblauch",
      "spinat",
      "muskatnuss",
      "eier",
      "mozzarella"
    ],
    "images": {
      "img_4966": "p4Gz9htNbAxovdBaz",
      "img_4960": "MKp6qECzzzWsmFL99"
    }
  },
  {
    "_id": "JMapqg4RrpeLRhZKW",
    "name": "Bigoli in Salsa",
    "url": "bigoli-in-salsa",
    "text": "#hauptgang #laktosefrei #leicht\n\nDraussen herrscht Endzeitwetter und der kulinarische Anspruch wird nur vom immens grossen Hunger übertroffen? Zeit für: ~\n\nBigoli in Salsa\n===============\n\n    2 Personen\n\nCa. ¾ h.\n\n    4 Zwiebeln\n    1 dl Weisswein\n    8 Sardellen in Öl\n    250g Spaghetti\n    Peterling\n    \n\n![](bigoli-in-salsa/img/img_8784)\n\n\n1. Zwiebeln fein scheibeln und in Olivenöl anschwitzen\n2. Ablöschen mit Weisswein und ohne Deckel währen ca. 30 min. weich dünsten\n3. Sardellen dazugeben. Während sich diese auflösen: Teigwaren kochen!  \nBigoli wären dickere Spaghetti.\n4. Etwa 3 Minuten vor Ende der Garzeit Teigwaren abgiessen, etwas Kochwasser in die Sauce rühren und Pasta darin fertig garen\n5. Mit gehacktem Peterling servieren.\n\nWieder einmal von Frau E. Raether. Den launigen Text dazu gibts [in der Zeit](https://www.zeit.de/zeit-magazin/2016/15/pasta-spaghetti-anchovis-wochenmarkt) ~ mr",
    "tags": [
      "hauptgang",
      "laktosefrei",
      "leicht"
    ],
    "ingr": [
      "personen",
      "zwiebeln",
      "weisswein",
      "sardellen",
      "öl",
      "spaghetti",
      "peterling"
    ],
    "images": {
      "img_8784": "7y6KxMzZqHXz2RaCh"
    }
  },
  {
    "_id": "YfdmoAaaFr62cDGbL",
    "name": "Rindsleberli",
    "url": "rindsleberli",
    "text": "#chic #hauptgang #schnell\n\nKein Stutz aber trotzdem Tiere essen? Unterschätzte Innereien: ~\n\nRindsleberli\n============\n    \n    Für 2.\n    \n10 Minuten. Die Beilage wird wohl mehr Zeit brauchen.\n\n    350 g Rindsleberli\n    1 Zwiebel\n    Olivenöl\n    Knoblauch\n    ½ dl Sherry\n    1 dl Demi-Glace\n    \n![](rindsleberli/img/img_4561)\n    \n1. Zwiebeln in Olivenöl glasig dünsten\n2. Knoblauch dazu, Temperatur erhöhen\n3. Leberli dazugeben und während 30 Sekunden unter Wenden anbraten.\n4. Mit Sherry ablöschen, Demi-Glace dazu, würzen und prompt servieren. Etwa mit Rösti oder Bratkartoffeln.\n\nTipps\n-----\n\n- Das mit dem kurzen Anbraten ist ernst gemeint. 45 Sekunden mögen noch gehen, aber zwei Minuten gibt Schuhsohlen!\n- Da man ja üblicherweise keine Demi-Glace vorrätig hat, kann man auch auf starke Fleischbrühe ausweichen\n- Die Leberli werden weniger bitter, wenn sie am Vortag in Milch eingelegt werden\n\n\nRezept von Ernst Siegrist III (Restaurant Felsenberg), rekonstruiert von der [Ortsgeschichtlichen Sammlung Seebach](http://www.ogs-seebach.ch/p/infoseld.php?id=1080). Dort finden sich nebst diesem auch noch [viele weitere](http://www.ogs-seebach.ch/p/ogstheme2.php?tid=12&sid=301) Familienrezepte. Danke! ~\n\n![](rindsleberli/img/img_5056)\n",
    "tags": [
      "chic",
      "hauptgang",
      "schnell"
    ],
    "ingr": [
      "für",
      "rindsleberli",
      "zwiebel",
      "olivenöl",
      "knoblauch",
      "sherry",
      "demi",
      "glace"
    ],
    "images": {
      "img_4561": "aFEdqxnRApp5FCCFC",
      "img_5056": "TSyNmBMF57MnBm4he"
    }
  },
  {
    "_id": "nMqrivEmAf89WLvRg",
    "name": "Speckzopf",
    "url": "speckzopf",
    "text": "#backen #apéro #imvoraus\n\nSpeckzopf\n=========\n\n![](speckzopf/img/dsc_0027)\n\n\n![](speckzopf/img/dsc_0012)\n![](speckzopf/img/dsc_0019)\n![](speckzopf/img/dsc_0022)\n![](speckzopf/img/dsc_0017)\n![](speckzopf/img/dsc_0025)\n\n",
    "images": {
      "dsc_0027": "4t4Yz5WgGLuvSG2CN",
      "dsc_0012": "XnWqFpmiJrommiBhX",
      "dsc_0022": "5nBE5jFbEFDpQih8w",
      "dsc_0025": "XtXKdt8hpwCxYkANA",
      "dsc_0019": "JPrbhZNnLCdG43JKJ",
      "dsc_0017": "zW9p44YirTufb8Y4z"
    },
    "tags": [
      "backen",
      "apéro",
      "imvoraus"
    ],
    "ingr": []
  },
  {
    "_id": "Gt5G7MXtyfJ8kLhfA",
    "name": "Café Glacé Grand Marnier",
    "url": "cafe-glace-grand-marnier",
    "text": "#dessert #kalt #imvoraus #alk\n\nKalte Eiweissverwertung von Gaby ~\n\nCafé Glacé Grand Marnier\n========================\n\n    10 Eiweiss\n    250g Zucker\n    5dl Rahm\n    1dl Grand Marnier\n    1dl Espresso\n    Kakaopulver\n    \n1. Eiweiss anschlagen. Zucker dazu und weiterschlagen bis knapp Schlagrahm-fest\n2. Zur Seite stellen und Rahm schlagen\n3. Likör und Espresso (kalt!) unter den Rahm mischen. Eiweiss darunterziehen und in einer Auflaufform gefrieren lassen\n4. Zum Servieren mit Kakaopulver bestäuben\n\nUnd mit dem Eigelb?\n-------------------\n\nMacht man am besten [Spaghetti Carbonara ohne Kompromisse](spaghetti-carbonara).\n\n\nWieder Mal ein Gefäss mit einer unbekannten Menge Eiweiss drin gefunden? 4 Eiweiss = 205g = 2dl. ~mr<br>",
    "tags": [
      "dessert",
      "kalt",
      "imvoraus",
      "alk"
    ],
    "ingr": [
      "eiweiss",
      "zucker",
      "rahm",
      "grand",
      "marnier",
      "espresso",
      "kakaopulver"
    ]
  },
  {
    "_id": "47qFEdiPd7qAmDqbq",
    "name": "Süsse Sulamith",
    "url": "susse-sulamith",
    "text": "#dessert #imvoraus #24h+\n\n\n\nSüsse Sulamith\n==============\n\n\nVorbereitung\n------------\n\n\n    4 Orangen    \n    1dl Orangensaft\n    1 Nägeli\n    1 Zimstange\n    3 Anissterne\n    50g Zucker\n    1 EL Koriandersamen\n    Salbei\n    \n\n1. Orangen filetieren    \n1. Alles andere zusammen einsirupen\n3. Über die Orangen giessen und stundenlang ziehen lassen für viel Smack\n\nAssemblage\n----------\n\n    250g Magerquark\n    250g Mascarpone\n    1,5 dl Rahm\n    Ras-El-Hanout\n    \n1. Milchprodukte zu fester Masse schlagen\n2. Mit Orangensalat servieren\n3. Ras-el-hanout als extratopping\n\n\n",
    "tags": [
      "dessert",
      "imvoraus",
      "24h+"
    ],
    "ingr": [
      "orangen",
      "orangensaft",
      "nägeli",
      "zimstange",
      "anissterne",
      "zucker",
      "koriandersamen",
      "salbei",
      "magerquark",
      "mascarpone",
      "rahm",
      "ras",
      "el",
      "hanout"
    ]
  },
  {
    "_id": "9bwqpK7DyGtAQWpQd",
    "name": "Tamago Kake Gohan",
    "url": "tamago-kake-gohan",
    "text": "#hauptgang #leicht #vegi #zvieri #schnell\n\nGlutamat zum Zmorge, da kann der Tag nur gut werden! ~\n\nTamago Kake Gohan\n=================\n\n    80g Reis\n    1 Ei\n    Soja-Sauce\n    Glutamat\n    Salz\n    Nori\n    Sesam\n    \n![](tamago-kake-gohan/img/img_5172)\n    \n1. Reis kochen\n2. Mulde reinmachen, Ei rein\n3. Würzen mit Soja-Sauce, Glutamat, Salz, zerbröselten Nori-Blättern, Sesam, oder was auch immer grad zur Hand ist\n4. Verrühren bis luftig\n\n![](tamago-kake-gohan/img/img_5158)\n\n",
    "tags": [
      "hauptgang",
      "leicht",
      "vegi",
      "zvieri",
      "schnell"
    ],
    "ingr": [
      "reis",
      "ei",
      "soja",
      "sauce",
      "glutamat",
      "salz",
      "nori",
      "sesam"
    ],
    "images": {
      "img_5158": "MFqdtvX2A9HZhWgEM",
      "img_5160": "i3AFbav2ZsAgz3hFW",
      "img_5172": "Wyvup2gw628rgPmQQ"
    }
  },
  {
    "_id": "NMPkJx9wLGscr9yPW",
    "name": "Böhmische Knödel",
    "url": "bohmische-knodel",
    "text": "#anti-pasta\n\nSieht doof aus, schmeckt aber gut ~\n\nBöhmische Knödel\n================\n\n    Beilage für 4.\n    \n1h gehen + gut 20 min. kochen\n\n    21g Hefe\n    425 ml Milchwasser\n    1 tl Zucker \n    1 tl Salz\n    ½ kg Mehl \n    1 Ei\n\n1. Hefe, Zucker und Salz in Milchwasser verrühren\n2. Mehl und Ei dazu, und teigen. 1h gehen lassen\n3. Zwei oder mehr Würste draus formen und in fast kochendes Wasser geben\n4. Nach gut 10 Minuten wenden und nochmals so lange ziehen lassen\n\nEs kann in der Pfanne eng werden, da die Knödel wohl auf die doppelte Grösse aufgehen. Resten lohnen sich – kann man gut in Butter anbraten. Passt natürlich gut zu Gulasch:\n\n**Notiz** vom letzten Versuch: Nicht zu feist machen, sonst werden sie innen nicht schön fluffig, während sie aussen schon langsam verpampen (wie verkochte Teigis halt).\n\n![](bohmische-knodel/img/img_5592)\n![](bohmische-knodel/img/img_5591)\n\n\n\n",
    "images": {
      "img_5591": "qGmZnYaQcdNXWphCd",
      "img_5592": "q3Am2SDCCNH7sRuEX"
    },
    "tags": [
      "anti-pasta"
    ],
    "ingr": [
      "beilage",
      "hefe",
      "milchwasser",
      "zucker",
      "salz",
      "mehl",
      "ei"
    ]
  },
  {
    "_id": "eQGJzfCGFfb2yMFJ7",
    "name": "Fenchel mit Sardellen",
    "url": "fenchel-mit-sardellen",
    "text": "Funktioniert auch als Pastasauce ~\n\nFenchel mit Sardellen\n=====================\n\n    ½ dl Olivenöl\n    400g Fenchel\n    4 Sardellenfilets\n    2 EL Dijon-Senf\n    ½ dl Weisswein\n    1 dl Zitronensaft\n    Salz und Pfeffer\n\n![](fenchel-mit-sardellen/img/img_0327)\n    \n1. Öl erhitzen, Sardellen darin schmelzen\n2. Fenchel dünn scheibeln und zugeben\n3. Senf und Wein verrühren und darübergiessen, salzen\n4. 20 Minuten zugedeckt plöderlen lassen\n5. Deckel weg und während weiteren 20 Minuten leicht anrösten. Dabei sollte es super senfig riechen, nicht verbrannt\n5. Zitronensaft zugeben bis es richtig sauer ist, das ist der Witz daran. Vielleicht noch salzen und pfeffern, wer weiss. MSG passt auch.",
    "tags": [],
    "ingr": [
      "olivenöl",
      "fenchel",
      "sardellenfilets",
      "dijon",
      "senf",
      "weisswein",
      "zitronensaft",
      "salz",
      "pfeffer"
    ],
    "images": {
      "img_0327": "yg2jx9LvuaPGzAbkK"
    }
  },
  {
    "_id": "v3NQ7H4kjEenbbTuW",
    "name": "Beerenkuchen",
    "url": "beerenkuchen",
    "text": "#dessert #leicht #schnell #backen\n\n\n\nBeerenkuchen\n=====================\n\nFür rundes Blech, ca. 30 cm Durchmesser, \nVorbereitung: ca. 15 min.  \nBackzeit: 35-40 Minuten\n\n    1 runder Blätterteig\n    250g Magerquark\n    150g Rahmquark\n    125g Zucker\n    1 Päckli Vanillezucker\n    1 Vanillestängel, ausgeschabtes Mark\n    2 Eier\n    2 EL Maisstärke\n    400g Beeren, je nach Vorliebe Brombeeren, Himbeeren, Johannisbeeren und / oder Blaubeeren\n    Puderzucker\n\n1. Blech mit Teig belegen, Teigboden mit Gabel einstechen\n2. Guss: Alle Zutaten bis und mit Eier verrühren. Maisstärke dazusieben, verrühren. Auf dem Teigboden verteilen.\n3. Beeren daraufstreuen\n4. Bei 220°C 35-40 Minuten auf unterster Rille backen.\n5. Auskühlen lassen. anschliessend mit Puderzucker bestreuen.\n\n",
    "tags": [
      "dessert",
      "leicht",
      "schnell",
      "backen"
    ],
    "ingr": [
      "magerquark",
      "rahmquark",
      "zucker",
      "vanillezucker",
      "vanillestängel",
      "mark",
      "eier",
      "maisstärke",
      "beeren",
      "vorliebe",
      "brombeeren",
      "himbeeren",
      "johannisbeeren",
      "blaubeeren",
      "puderzucker"
    ]
  },
  {
    "_id": "Gaq4Na8ShXSQworiD",
    "name": "Süsskartoffeln-Curry/Chili mit Kichererbsen und Poulet",
    "url": "susskartoffeln-currychili-mit-kichererbsen-und-poulet",
    "text": "#outdoorküche\n\nSüsskartoffeln-Curry/Chili mit Kichererbsen und Poulet\n=====================\n\nFür 4 Personen, ca. 30 min - 1h\n\n    3 Süsskartoffeln\n    1 Dose Kichererbsen\n    1 Dose Kokosmilch(Pelati & Kidneybohnen für's Chili)\n    1 Rüebli\n    300g Pouletbrust\n    1 Würfel Bouillon\n    Zwiebel und Knoblauch\n    Gewürze (Salz, Pfeffer, Curry/Chili)\n    ...anderes nach Belieben (Peperoni, Mais, Koriander, Kreuzkümmel, Zimt, Rosinen...)\n    etwas Olivenöl\n    \n\n\n![](susskartoffeln-currychili-mit-kichererbsen-und-poulet/img/susskartoffelcurry)\n\nMit zwei Töpfen\n---------------\n    \nIm *ersten Topf* das Gemüse mit der Hälfte vom Bouillon andünsten.\n\nDas Poulet wie auch immer (nicht) zuschneiden und im _zweiten Topf_ anbraten. Poulet wieder raus nehmen und möglichst warm halten.\n\nKichererbsen mit Kokosmilch (oder eben Pelati & Bohnen) mit dem Rest kochen lassen.\n\nMit einem Topf\n--------------\n    \nPoulet mundgerecht schneiden und anbraten, dann raus nehmen und warm halten. Zuerst das Gemüse mit Wasser und Bouillon andünsten.\n\nBevor das Gemüse fertig ist wirfst Du den Rest dazu und lässt es weiter köcheln.\n\nIrgendwann hast Du genügend Hunger oder findest, es sei jetzt fertig... \n\n\nDann heisst's aufteilen und geniessen! 😋\n    \n![](susskartoffeln-currychili-mit-kichererbsen-und-poulet/img/curryfeuer)\n\nOriginalrezept von [Milchblau](https://www.milchblau.de/outdoor-rezepte/)\n\n\n\n",
    "tags": [
      "outdoorküche"
    ],
    "ingr": [
      "süsskartoffeln",
      "kichererbsen",
      "kokosmilch",
      "pelati",
      "kidneybohnen",
      "chili",
      "rüebli",
      "pouletbrust",
      "würfel",
      "bouillon",
      "zwiebel",
      "knoblauch",
      "gewürze",
      "salz",
      "pfeffer",
      "curry",
      "chili",
      "belieben",
      "peperoni",
      "mais",
      "koriander",
      "kreuzkümmel",
      "zimt",
      "rosinen",
      "olivenöl"
    ],
    "images": {
      "susskartoffelcurry": "s2Qoxh27jeNRJTA3d",
      "curryfeuer": "PmJcmjh2mqqbCKX5L"
    }
  },
  {
    "_id": "pqx9DzBLy8KKQzHTp",
    "name": "Sandkuchen à la Bruno",
    "url": "sandkuchen-a-la-bruno",
    "text": "#outdoorküche #vegi\n\nEin Beispielrezept! Der Weg ist das Ziel ~\n\nSandkuchen à la Bruno\n=====================\n\nFür 2 Personen, ca. 20 min.\n\n    2 Blätter Löwenzahn\n    1 kg Sand, grobkörnig\n    1 l Wasser, brackig\n    10 Margeritenköpfe\n\n1. In einem Kessel Wasser abmessen, Sand sorgfältig einrieseln lassen und während 15 min kräftig umrühren.\n2. Kessel herumzeigen. Margeriten beifügen und mit Löwenzahn abschmecken.\n\nIch nehme jeweils Sand, der von Katzen als Klo benutzt wurde. Gibt einfach das vollere Aroma ~mr\n",
    "tags": [
      "outdoorküche",
      "vegi"
    ],
    "ingr": [
      "löwenzahn",
      "sand",
      "wasser",
      "margeritenköpfe"
    ]
  },
  {
    "_id": "v8ac5sxL2QtdSGZ9t",
    "name": "Matar Paneer",
    "url": "matar-paneer",
    "text": "#hauptgang #vegi #indisch\n\nMatar Paneer\n=====================\n\nFür 3 Personen.\n  \nZuerst die Paste\n----------------\n\n    etwas Öl\n    3 Knoblauchzehen, fein geschitten\n    1/2 TL Kardamom, gemahlen\n    ca. 1.5cm Ingwer, fein geschnitten\n    2 Zwiebeln, in Stücken\n    3-4 Tomaten, in Stücken\n    1/2 TL Salz\n    1/4 TL Kurkuma\n    1 Hampfela Cashews\n\n1. Knobli und Ingwer kurz mit Kardamom anbraten. \n2. Zuerst Zwiebeln, dann auch Tomaten, Salz und Kurkuma dazu, kurz weiterbraten, dann Deckel drauf und warten, bis die Tomaten zerfallen.\n3. Cashews dazu, das Ganze abkühlen lassen und dann fein pürieren.\n\nDann das Ganze zusammen\n-----------------------\n\n    noch einmal etwas Öl\n    1/2 Zimtstange\n    2-3 Lorbeerblätter\n    1/2 TL Kreuzkümmelsamen\n    1 TL Chilipulver\n    1 TL Garam Masala (Gewürzmischung)\n    1/2 TL Koriandersamen, gemahlen\n    1 Schäli Erbsli (gefroren geht auch gut)\n    3 dl Wasser\n    250g Paneer, in Würfeli\n    evtl. grüne Chili\n    evtl. etwas Rahm oder Kokosmilch\n    frischer Koriander, gezupft\n\n1. Zimt, Lorbeerblätter und Kreuzkümmel kurz anbraten, dann die vorbereitete Paste, Chili, Garam Masala und Koriander  dazugeben, anbraten bis die Masse sich vereint und dickflüssiger wird (dabei immer wieder rühren).\n2. Erbsli und Wasser dazu, gut mischen. Zugedeckt köcheln lassen, bis die Sauce sich vereint und leicht dickflüssig wird.Sauce probieren und allenfalls nachwürzen.\n3. Paneer und evtl grüne Chili für 5 Minuten mitköcheln. \n4. Zimt, Lorbeerblätter und Chili entfernen.Wer mag, kann noch einen Schluck Rahm oder Kokosmilch dazugeben und Koriander drüber streuen.\n\nAm besten mit Reis und Naan servieren.\n\n\n\n~kd\n",
    "tags": [
      "hauptgang",
      "vegi",
      "indisch"
    ],
    "ingr": [
      "öl",
      "knoblauchzehen",
      "kardamom",
      "ingwer",
      "zwiebeln",
      "tomaten",
      "salz",
      "kurkuma",
      "hampfela",
      "cashews",
      "öl",
      "zimtstange",
      "lorbeerblätter",
      "kreuzkümmelsamen",
      "chilipulver",
      "garam",
      "masala",
      "gewürzmischung",
      "koriandersamen",
      "schäli",
      "erbsli",
      "wasser",
      "paneer",
      "würfeli",
      "chili",
      "rahm",
      "kokosmilch",
      "koriander"
    ]
  },
  {
    "_id": "KKdPFr4PNQeM2qYGY",
    "name": "Dosenwickel Deluxe",
    "url": "dosenwickel-deluxe",
    "text": "\"Zum Schiisse längt's\" ~ kw\n\n#schnell #vorrat #hauptgang #antipasta #vegi #fisch #imvoraus #kalt\n\nDosenwickel Deluxe\n==================\n\n    Für 2 Esser.\n    \n30 Min Arbeit + 2h Minuten warten\n\n![](dosenwickel-deluxe/img/img_7633)\n\nFüllung\n-------\n\n    1 Dose Thon\n    ½ Dose Mais\n    3-4 EL Tomatenmark\n    ½ Zwiebel\n    1 Bd Petersilie\n    1 Zitrone\n    4-5 Peperoncini\n    1 kleine Tomate\n    Paprika\n    \n1. Zwiebel, Tomate, Peperoncini, Peterling fein hacken\n2. Zitrone auspressen, alles vermengen\n3. Abschmecken mit Salz, Pfeffer und Paprika\n4. Mindestens **Zwei Stunden** im Kühlschrank ziehen lassen. *Es macht wirklich einen Unterschied und ist für den Geschmack absolut entscheidend!!!*\n\n\nFladen\n------\n\n    250g Mehl\n    1 EL Öl\n    Wasser\n    \n1. Zu einem glatten Teig kneten\n2. ½h ruhen lassen\n3. In 4 Portionen aufteilen, diese Tellergross auswallen\n4. In der Pfanne backen, etwas Füllung drauf, wickeln und zack fettich",
    "images": {
      "img_7633": "H6N3tcYPMuDjtP6We"
    },
    "tags": [
      "schnell",
      "vorrat",
      "hauptgang",
      "antipasta",
      "vegi",
      "fisch",
      "imvoraus",
      "kalt"
    ],
    "ingr": [
      "für",
      "esser",
      "thon",
      "mais",
      "tomatenmark",
      "zwiebel",
      "bd",
      "petersilie",
      "zitrone",
      "peperoncini",
      "tomate",
      "paprika",
      "mehl",
      "öl",
      "wasser"
    ]
  },
  {
    "_id": "Zu5JopAnFdDbiBQ6L",
    "name": "Hackbällchen-Suppe",
    "url": "hackballchen-suppe",
    "text": "#suppe \n\nDie perfekte Verwertung von Pastinaken ~\n\nHackbällchen-Suppe\n=====================\n\nFür 4 Personen, ca. 40 Min.\n\n    200g Pastinaken\n    4 Zweiglein glattblättriger Peterli (kann man auch weglassen)\n    300 g Hackfleisch \n    80 g geriebener Gruyère\n    20 g Paniermehl\n    1/2 TL Salz \n    wenig Pfeffer\n    Öl zum Braten\n    1,5 L Bouillon (z.B. Rind)\n    1 Knoblauchzehe\n    200g Fregola Sarda (oder einfach Krawättli oder andere Suppen-        Teigwaren)\n    200 g tiefgekühlte Erbsen oder Bohnen (kann man auch weglassen)\n    ca. 300 g Spinat (tiefgekühlt oder frisch)\n    30 g geriebener Gruyère\n    \n1. Hackfleisch-Masse: \n    Pastinaken schälen und fein raffeln.\n    Peterli fein schneiden.\n    Hackfleisch, Käse und Paniermehl beigeben, würzen.\n    Masse mischen, gut kneten, bis alles kompakt ist.\n    \n2. Hackbällchen: \n    Kugeln formen.\n    Öl in Bratpfanne erhitzen.\n    Hackbällchen portionenweise rundum ca. 4 Min. anbraten.\n    auf Haushaltspapier abtropfen.\n    \n3. Suppe: \n    Bouillon aufkochen.\n    Knoblauch dazupressen.\n    Pasta und Bohnen ca. 5 Min. mitköcheln.\n    Spinat und Hackbällchen beigeben, ca. 5 Min. mitköcheln.\n    Käse darüberstreuen.\n\nOli lässt natürlich den Peterli weg. Ronja findet Kugeln formen toll.~ms\n",
    "tags": [
      "suppe"
    ],
    "ingr": [
      "pastinaken",
      "peterli",
      "hackfleisch",
      "gruy",
      "paniermehl",
      "salz",
      "pfeffer",
      "öl",
      "braten",
      "bouillon",
      "rind",
      "knoblauchzehe",
      "fregola",
      "sarda",
      "krawättli",
      "suppen",
      "teigwaren",
      "erbsen",
      "bohnen",
      "spinat",
      "gruy"
    ]
  },
  {
    "_id": "cunyontXHoo9Zo6wD",
    "name": "Das Beste vom Kartoffelgratin",
    "url": "das-beste-vom-kartoffelgratin",
    "text": "#vegi #anti-pasta #imvoraus #mamaroggo #chic #mengenlos\n\nGab's immer bei Gemma ~\n\nDas Beste vom Kartoffelgratin\n=============================\n\n    Kartoffeln (mehlig)\n    Bouillon\n    Rahm\n    \n![](das-beste-vom-kartoffelgratin/img/img_7960)\n    \n1. Backblech einfetten, Kartoffeln waschen. Ungeschält mit dem Gemüsehobel hobeln und auf dem Blech auffächern\n2. Mit etwas Bouillon übergiessen und für ca. 20 Minuten bei 180° Umluft vorkochen/andörren\n3. Rahm darübergiessen und nochmals 15 Minuten fertig gratinieren\n\n![](das-beste-vom-kartoffelgratin/img/img_7957)\n![](das-beste-vom-kartoffelgratin/img/img_7959)\n",
    "tags": [
      "vegi",
      "anti-pasta",
      "imvoraus",
      "mamaroggo",
      "chic",
      "mengenlos"
    ],
    "ingr": [
      "kartoffeln",
      "bouillon",
      "rahm"
    ],
    "images": {
      "img_7959": "DtXDaTPj4c3jiXNco",
      "img_7957": "fNyQgRXfPpn3AJp3q",
      "img_7960": "CN8rjLREM67kTCMs5"
    }
  },
]

Meteor.startup(() => {
  if (Rezepte.find().count() == 0) {
    for (let rez of backup) {
      Meteor.call("saveRezept", new Rezept({markdown: rez.text}))
    }
  }
})
