#!/bin/bash

chmod +x bin/githooks.sh
chmod +x bin/build.sh

(./bin/githooks.sh; ./bin/build.sh)
