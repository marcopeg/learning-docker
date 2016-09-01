FROM node:latest
MAINTAINER "@marcopeg"

RUN npm install -g \
	webpack \
	webpack-dev-server \
	gulp-cli \
	grunt-cli \
	bower \
	yo \
	nodemon \
	supervisor \
	pm2 \
	mocha \
	karma-cli \
	dalek-cli \
	webdriverio \
    http-server


VOLUME 		/usr/src/app
WORKDIR 	/usr/src/app

#ENTRYPOINT  npm install && npm start
ENTRYPOINT /bin/bash
