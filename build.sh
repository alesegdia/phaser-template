#!/usr/bin/env bash

FILES=`cat files`
echo $FILES
cat $FILES > /tmp/build.phaser.js
uglifyjs /tmp/build.phaser.js > game.min.js
