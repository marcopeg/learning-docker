# Work with `docker-compose`

[Wordpress](https://wordpress.org/) is cool, uh? You can build your own blog, post about things and earn millions with ads. What could possibly go wrong? 

Good, now that we know how to cash out our time let us solve the technical part of the endeavour. After all, once we have our blog up and running, then it's just a matter of contens, isn't it? I'll let that part to you.

## Multi Service Environment

The first thing I would like you to focus is that a simple Wordpress website is composed by different services:

- a web server - Apache? NGiNX?
- a MySQL server - which version?
- a database tool - they told me phpMyAdmin is nice...
- a storage service - for database, for my uploads, for my theme and plugins
- Wordpress itself - which version? which configuration?

> Damn it, it is not as simple as I thought it would be!  
> ... maybe I should go back to my tomatoes growing activity ...

- Do I install everything on my computer?
- Do I need many computers?
- Do I have to pay 40$ for MAMP PRO? (I did it for years, it is good!)

The answer is: **_"not today, not with Docker!"_**

All the software you need to run a blog is Open Source and free. But there is more: some nice guys already packaged everything up as Docker images:

- [Docker Wordpress](https://hub.docker.com/_/wordpress/)
- [Docker MariaDB](https://hub.docker.com/_/mariadb/)
- [Docker PhpMyAdmin](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)

## Herding Cats

[Watch it now, but sit down first!](https://www.youtube.com/watch?v=Pk7yqlTMvp8)

If you try to run each service in isolation, by exposing ports, linking volumes, editing config files... you will just drive yourself crazy. It is not the way to do it.

The answer is `docker-compose`.

## Describe your Services

`docker-compose` is a tool (it comes with Docker, you already have it!) that reads an _YML_ file in which you describe your environment: which services do you need and how to tie them up.

A `docker-file.yml` looks something like that:

```
version: '2'
services:

    database:
        image: mariadb:latest
        environment:
            MYSQL_ROOT_PASSWORD: root

    phpmyadmin:
        image: phpmyadmin/phpmyadmin
        links:
            - database:db
        ports:
            - 80:80
        environment:
            PMA_USER: root
            PMA_PASSWORD: root
```

In this simple example we list 2 services:

- a database which comes from a MariaDB image
- a phpMyAdmin app which depends on the database and exposes port `80` to the host

In order to run the environment you should issue the following command from `docker-compose.yml`'s _cwd_:

	docker-compose up
	
