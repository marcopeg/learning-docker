#/bin/bash

# Learning Docker
# by @marcopeg
# https://github.com/marcopeg/learning-docker

# download an image from Docker Hub
docker run --name nodeapp -d -p 1234:8080 marcopeg/nodeapp:latest

