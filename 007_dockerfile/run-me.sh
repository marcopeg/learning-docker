#/bin/bash

# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

# build a custom image
docker build --tag my-nginx .

# run the new custom image
docker run -p 80:80 my-nginx
