#!/bin/bash
cd "$(dirname "${BASH_SOURCE[0]}")"
source ../.env
now=$(date +"%y-%m-%d")
db_name=${DOMAIN//./-}
ssh $SSH_USER@$SSH_HOST "docker exec mongodb mongodump -d $db_name --archive --gzip" > "../backups/$now.gz"

rsync --progress --recursive --exclude=".*" $SSH_USER@$SSH_HOST:$REMOTE_IMAGE_DIR/* ../backups/images

