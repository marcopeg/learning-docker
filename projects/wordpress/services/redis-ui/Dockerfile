FROM node:latest

RUN npm install -g redis-commander

EXPOSE 8081

CMD ["redis-commander", "--redis-host", "redis"]
