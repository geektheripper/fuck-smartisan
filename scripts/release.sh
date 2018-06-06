#!/bin/bash
export PATH="$PATH:node_modules/.bin"

set -e
echo "Enter release version: "
read VERSION

echo "Build: "
yarn build
chmod +x dist/cli.js

echo "Start unit test: "
mocha

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # commit
  git add -A
  git commit -m "[build] $VERSION" || {
    read -p "Commit fail, continue ? (y/n)" -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]
    then
      exit
    fi
  }

  # version
  npm version $VERSION --message "[release] $VERSION"

  # tag
  git push origin refs/tags/v$VERSION
  git push

  # publish
  npm publish
fi