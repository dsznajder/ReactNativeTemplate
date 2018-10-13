#!/bin/sh

printf -- '\n';

printf 'Initializing git...';
rm -rf .git .circleci greenkeeper.json LICENCE;
printf -- '\n';
git init;
printf -- '\n';

printf -- '\n';

_=$(command -v yarn);
if [ "$?" != "0" ]; then
  npm install;
fi;
yarn install;

