#!/bin/bash
set -e

JSON4U_DIR="$(cd "$(dirname "$0")" && pwd)"
GITHUB_IO_DIR="$JSON4U_DIR/../itschenxiang.github.io"

echo ">>> Building json4u..."
cd "$JSON4U_DIR"
pnpm build

echo ">>> Copying build output to github.io repo..."
rm -rf "$GITHUB_IO_DIR/json4u"
mkdir -p "$GITHUB_IO_DIR/json4u"
cp -r "$JSON4U_DIR/out/"* "$GITHUB_IO_DIR/json4u/"

echo ">>> Deploying to GitHub Pages..."
cd "$GITHUB_IO_DIR"
git checkout main
git add json4u
git commit -m "deploy json4u $(date '+%Y-%m-%d %H:%M:%S')" || true
git config http.postBuffer 524288000
git push origin main

echo ">>> Done! Visit https://itschenxiang.github.io/json4u/"
