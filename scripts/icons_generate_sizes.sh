#!/usr/bin/env bash
cd "$(dirname "${BASH_SOURCE[0]}")"
cd ../app/public
name=${1:-buch}
rsvg-convert -w 512 -h 512 $name.svg -b white -o $name-512.png
rsvg-convert -w 180 -h 180 $name.svg -b white -o $name-180.png
rsvg-convert -w 512 -h 512 ${name}_adaptive.svg -b white -o ${name}_adaptive-512.png
rsvg-convert -w 192 -h 192 ${name}_adaptive.svg -b white -o ${name}_adaptive-192.png
