#!/bin/bash
if [ $# -eq 0 ]
  then
    echo "Please pass the backup dump file as a first parameter (e.g. 21-09-26.gz)"
    exit
fi
if [ $# -eq 1 ]
  then
    echo "Pass an additional second argument to specifiy the source namespace root (e.g. Rechords)"
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
