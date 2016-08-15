#/bin/bash

# Learning Docker
# by @marcopeg
# https://github.com/marcopeg/learning-docker

# accept a custom port setting with a fallback value
PORT=${PORT:-8080}

# start our app in background
APP_ID=$(
    docker run \
    -d \
    -p $PORT:$PORT \
    -e PORT=$PORT \
    ${1:-nodeapp}:${2:-latest}
)

# connect to the app's logs tail
# you may type `Ctrl+c` to disconnect from that tail
docker logs $APP_ID -f
