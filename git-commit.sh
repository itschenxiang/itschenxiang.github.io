#!/bin/bash
echo $#
if [ $# == 1 ]
then
  git add .
  git commit -m "$1"
  git push origin dev
else
    echo "usage: git-commit.sh <commit-message>"
fi