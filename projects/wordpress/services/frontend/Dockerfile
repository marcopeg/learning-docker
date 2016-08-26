FROM node:latest
MAINTAINER "@marcopeg"

ADD start.sh /start.sh

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

ENTRYPOINT /start.sh
