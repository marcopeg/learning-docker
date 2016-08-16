#/bin/bash

# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

# HOW TO USE THE RUNNING CONTAINER:
# once the container starts you can run standard node commands like:
# * npm start - to run the development server
# * npm install - to install the dependencies in a new environment

# CUSTOM PORT FOR DEV ENVIRONMENT
# it is cool to let a developer to choose which port to use while
# working on a project. this allows you to run something like:
# "$> PORT=1234 ./dev.sh"
PORT=${PORT:-8080}

# run a standard NodeJS image and connect a local folder as
# internal volume for development activities
docker run \
    --rm \
    -it \
    -v $(pwd)/app/:/usr/src/app \
    -w /usr/src/app \
    -p $PORT:$PORT \
    -e PORT=$PORT \
    node:latest \
    /bin/bash

# 21 - clean up when stop the container
# 22 - interactive mode (prompt)
# 23 - connect a local folder to the container
# 24 - set the initial working directory
# 25 - expose a logic port to the host
# 26 - set an ENV variable to the Node app
# 27 - which NodeJS version do you want?
# 28 - start a bash session on startup
