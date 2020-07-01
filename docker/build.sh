#!/bin/bash

if (( $# != 1 )); then
    echo "Need version number as the only argument"
    exit 1
fi

version=$1
echo "########## Building $version"

#echo "########## Angular build"
#ng build --prod

echo "########## Docker build"
cp Dockerfile ../dist/vote
cd ../dist/vote
docker build -t rq170/vote:$version .

echo "########## Docker push"
docker push rq170/vote:$version
cd ../../docker

echo "now execute: docker stack deploy -c docker-compose.yml mswarm1"

