#!/bin/bash
if [ $# -eq 0 ]
  then
    echo "Please pass the backup dump file as a first parameter (e.g. 21-09-26.gz)"
    exit
fi
if [ $# -eq 1 ]
  then
    echo "Pass an additional second argument to specifiy the source namespace root (e.g. rezept-ee)"
    exit
fi

if ! command -v mongosh > /dev/null
  then
    echo "mongosh fehlt — es wird gebraucht, um die Bildpfade umzuschreiben (brew install mongosh)"
    exit
fi

cd "$(dirname "${BASH_SOURCE[0]}")" || exit
source ../.env
dump=../backups/$1
db_name=${DOMAIN//./-}
db_source_name=${2:-$db_name}

mongo_connection_string="mongodb://localhost:3001"

cd ../backups || exit
cat $dump | mongorestore $mongo_connection_string --nsFrom=$db_source_name.* --nsTo=meteor.* --archive --gzip --drop
rsync --recursive --exclude=".*" images/* ../app/images

# Meteor-Files merkt sich beim Upload den absoluten Pfad jeder Datei. Aus dem
# Dump kommen deshalb die Pfade der Produktion (/images/...), die es hier nicht
# gibt — ohne Umschreiben zeigt jedes Bild ins Leere.
images_dir=$(cd ../app/images && pwd)
mongosh "$mongo_connection_string/meteor" --quiet --eval '
  const target = "'"$images_dir"'";
  const toLocal = path => typeof path === "string" ? path.replace(/^.*\/images\//, target + "/") : path;

  let count = 0;
  db.imgs.find({}, {path: 1, versions: 1}).forEach(img => {
    const fields = {path: toLocal(img.path)};
    for (const [label, version] of Object.entries(img.versions ?? {})) {
      fields["versions." + label + ".path"] = toLocal(version.path);
    }
    db.imgs.updateOne({_id: img._id}, {$set: fields});
    count++;
  });
  print(count + " Bildpfade auf " + target + " umgeschrieben");
'
