
# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

FROM node:latest

ADD start.sh /start.sh

WORKDIR /usr/src/app/

RUN npm install -g supervisor

# Does our app need any particular environment configuration?
# (this is good for API settings and db connection info./)
ENV PORT=8080

# network settings
EXPOSE 8080

# how to start the app
ENTRYPOINT /start.sh
