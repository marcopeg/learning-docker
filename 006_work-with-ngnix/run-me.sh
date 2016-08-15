#/bin/bash

# Learning Docker
# by @marcopeg
# https://github.com/marcopeg/learning-docker

# download an image from Docker Hub
NGINX_ID=$(docker run \
    -d \
    -p 80:80 \
    -v "$PWD"/www:/usr/share/nginx/html:ro \
    nginx:latest)

docker logs $NGINX_ID -f
