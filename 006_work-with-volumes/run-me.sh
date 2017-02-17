#/bin/bash

# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

# download an image from Docker Hub and run it with custom options
docker run \
    --rm \
    -p 8080:80 \
    -v "$PWD"/www:/usr/share/nginx/html \
    nginx:latest
