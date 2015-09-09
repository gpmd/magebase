#!/bin/bash

# Check if we're in the right directory
directory="bin"
if [ ! -d "$directory" ]
then
    echo "--- Please run this shell file from the project root (site)"
    exit
else
    echo "--- Running front end build..."
fi

# `npm install` and `npm prune` if the `package.json` file gets changed
echo "--- Installing and pruning Node packages..."
(npm install && npm prune)
echo -e "\xe2\x9c\x94 All done"

# `bower install` and `bower prune` if the `bower.json` file gets changed
echo "--- Installing and pruning Bower components..."
(bower install --allow-root && bower prune --allow-root)
echo -e "\xe2\x9c\x94 All done"

# Run the build process `grunt --env=prod`
echo "--- Running the default build process..."
grunt
