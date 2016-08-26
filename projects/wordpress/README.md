# Wordpress Project

A friend of mine got this crazy idea of using Wordpress as pure backend, a NodeJS frontend server to expose contents that were cached on Redis, a modern ReactJS frontend and a message queue system to glue everuthing together.

This project brings all those stuff together using `docker-compose` to harness all the services.

> **IMPORTANT:** this project represent a crazy over architectural approach to a 
> simple problem. I am not crazy, I'm just trying to make a point with _Docker_.

## Services

### Wordpress

Hugely used content management system.

### MySql

Old school relational database used by Wordpress.

### Redis

Fast key/value data storage.

### RabbitMQ

Reliable message queue system.

### PhpMyAdmin

Web based UI to MySQL.

### redis-commander

Web based UI to Redis.

### NodeJS

Custom Docker image definition to host a NodeJS application.  
We use quite a lot of micro-services based on NodeJS in this project!

### NGiNX

Fast and reliable web server, we use it as facade for our system. 

Most of the services will run inside Docker and will be exposed to other services via Docker's links. Some of the services exposes public APIs and it is NGiNCX who is in charge of that.
