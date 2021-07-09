#!/bin/bash

yarn husky install;
yarn jetify;

if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Installing pods..."
  cd ios && pod install && cd ..;
fi
