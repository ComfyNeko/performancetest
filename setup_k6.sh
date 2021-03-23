#!/bin/bash
set -ex

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list

echo 'update over'
sudo apt-get install k6
echo 'installation complete'
