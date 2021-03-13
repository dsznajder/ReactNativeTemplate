#!/bin/bash

yarn jetify;

if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Installing pods..."
  cd ios && pod install --repo-update && cd ..;
fi
