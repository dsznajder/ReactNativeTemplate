#!/bin/bash

if [ -f ./scripts/projectNameChange.sh ]; then
    ./scripts/projectNameChange.sh
fi

_=$(command -v yarn);
if [ "$?" != "0" ]; then
  npm install;
fi;
yarn install;

if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Installing pods...\n"
  cd ios && pod install && cd ..;
fi

rm -rf ./scripts/projectNameChange.sh
