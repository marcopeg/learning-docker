#/bin/bash

# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

# resolve packaje.json dependencies
npm install

npm start

# let package.json define how to boot the app in both dev and production
# if [ $NODE_ENV = "development" ]; then
#     npm run start-dev
# else
#     npm start
# fi
