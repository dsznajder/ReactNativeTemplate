#!/bin/bash

if [ -f ./scripts/project_name_change.sh ]; then
    ./scripts/project_name_change.sh
fi

yarn install;

if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Installing pods...\n"
  cd ios && pod install && cd ..;
fi

rm -rf ./scripts/project_name_change.sh
