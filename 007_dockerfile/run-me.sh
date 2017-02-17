#/bin/bash

# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

# build a custom image
docker build --tag marcopeg .

# run the new custom image
docker run -p 8080:80 marcopeg
