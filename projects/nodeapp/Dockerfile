
# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

# Which NodeJS version do we need for our app?
FROM node:latest

# What files do we need to run our app?
COPY app /usr/src/app/

# What is our app's root path?
WORKDIR /usr/src/app/

# resolve the app dependencies as they are described
# into the package.json at image building time
RUN npm install

# Does our app need any particular environment configuration?
# (this is good for API settings and db connection info./)
ENV PORT=8080

# network settings
EXPOSE 8080

# how to start the app
ENTRYPOINT ["npm", "start"]
