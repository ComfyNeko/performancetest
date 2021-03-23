#!/bin/bash
set -ex

sudo apt-get update
echo "update over"
sudo apt-get install dirmngr --install-recommends
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61

sudo apt-get update
sudo apt-get install k6
