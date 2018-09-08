#!/bin/sh

printf -- '\n';

_=$(command -v yarn);
if [ "$?" != "0" ]; then
  npm install;
fi;
yarn install;

