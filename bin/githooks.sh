#!/bin/bash

# Check if we're in the right directory
directory="bin"
if [ ! -d "$directory" ]
then
    echo "--- Please run this shell file from the project root (site)"
    exit
else
    echo "--- Running githook setup..."
fi

# Check if pre-commit symlink exists and if not, create it
file=".git/hooks/pre-commit"
if [ -h "$file" ]
then
    echo -e "\xe2\x9c\x94 pre-commit git hook symlink already exists"
    echo "--- Moving on..."
else
    echo "--- Creating pre-commit git hook symlink..."
    (cd .git/hooks; ln -s ../../githooks/pre-commit pre-commit)
    echo -e "\xe2\x9c\x94 All done"
    echo "--- Setting execute permissions on pre-commit git hook..."
    (cd githooks; chmod +x pre-commit)
    echo -e "\xe2\x9c\x94 All done"
fi

# Check if post-merge symlink exists and if not, create it
file=".git/hooks/post-merge"
if [ -h "$file" ]
then
    echo -e "\xe2\x9c\x94 post-merge git hook symlink already exists"
    echo "--- Moving on..."
else
    echo "--- Creating post-merge git hook symlink..."
    (cd .git/hooks; ln -s ../../githooks/post-merge post-merge)
    echo -e "\xe2\x9c\x94 All done"
    echo "--- Setting execute permissions on post-merge git hook..."
    (cd githooks; chmod +x post-merge)
    echo -e "\xe2\x9c\x94 All done"
fi
