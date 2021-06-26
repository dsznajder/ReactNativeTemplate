#!/bin/bash

git init;

yarn husky install;
yarn jetify;

if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Installing pods..."
  cd ios && pod install --repo-update && cd ..;
fi

git add . && git commit -m 'Initial commit';
