#/bin/bash

# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

# download an image from Docker Hub
docker run --name nodeapp -d -p 8080:8080 marcopeg/nodeapp:latest
