#!/bin/bash
set -e

cd /home/flashcard/server
yarn
yarn start

exec "$@"