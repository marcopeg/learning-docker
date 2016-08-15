#/bin/bash

# Learning Docker
# by @marcopeg
# https://github.com/marcopeg/learning-docker

# start our app in background
APP_ID=$(
    docker run \
    -d \
    -p 8080:8080 \
    nodeapp:latest
)

# connect to the app's logs tail
# you may type `Ctrl+c` to disconnect from that tail
docker logs $APP_ID -f
