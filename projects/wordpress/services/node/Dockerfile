FROM node:latest

WORKDIR /usr/src/app/

RUN npm install && \
    npm install -g supervisor

# Does our app need any particular environment configuration?
# (this is good for API settings and db connection info./)
ENV PORT=8080

# network settings
EXPOSE 8080

# how to start the app
CMD ["node", "./app.js"]
