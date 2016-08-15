# NodeJS App

This is an example of a simple NodeJS app which uses Docker to run both under development and under production. 

> This is a simple example and we are not taking into account complex provisioning 
> or scalability issues. Take it easy!

## The App

Our application is a simple [ExpressJS]() server which returns an "Hello World" page to the browser. Nothing really challenging here, but you can extend it an build some serious s**t out of it.

## The Quest

Our objective is to make the working and deploying process as smooth as we possibly could. And of course we use Docker to achieve so.

Some of the questions that you (as developer) may ask when you start to work with a codebase you don't know are:

- which Node version do I need?
- how do I start the application?
- which port is to be used?

A SysOp may also need to know:

- which libraries do I need to provide?
- how do I install the app's dependencies?

**By using Docker you will be able to cut down those questions to Zero**

## Development Environment

When it comes to development environment I'm always scared I will have to mess up my working machine with weird version of different exotic libraries. And I almost never really know how to run those.

In this example we provide a ready to use development environment which you launch from your terminal:

	./scripts/dev.sh
	
This script will use Docker to (pull) and run a Linux box with the right NodeJS version preinstalled on it. That machine runs in `-it` mode so you will be able to issue commands like:

	# setup & start your project
	npm install && npm start
	
Our application will start on port `8080`... But what if this port was already taken by another service on your working machine?

Fear no more! Docker is flexible and **plays very well with environment variables**, you can start your script with a custom port and this information will be applied to the container and to the running app:
	
	# run the environment with custom environment driven settings
	PORT=1234 ./scripts/dev.sh

Now you can dive into the source code and start to hack the app the way you want! The local folder `./app` is magically connected to your environment container so that **you can open your favourite editor and just change the source code** without worring about how things are wired up.

> You don't even need NodeJS to be installed on your working machine!  
> <small>WTF?!?!</small>

## Production Environment

When it comes to put your application to work you probably want to use Docker as well in order to run something like:

1. pull the image
2. start a container
3. take a look to the app's logs
4. (go for a beer and live happyly ever after)

Ok, this is a bit simplicistic and we are not taking into account crashes and scalability. But this was an easy project, remember?

### Build a Custom Image

There is a utility script that builds an image for you:

	./scripts/build.sh
	
This script does nothing but execute a `docker build` instruction fetching all the informations about what to build from the local `./Dockerfile`.

Take a look at that file please, it is a simple definition list that Docker uses to create a new image that will containe and be able to execute your NodeJS app.

### Run your App as a Service

Now that the image is ready is time to run it as a service. Again we provide a script to do that, a simple script that wraps around `docker run` command:

	./scripts/start.sh
	
This script will run the custom image in detached mode `-d` and automatically connect your terminal to it's logs. You don't really do that in a production environment but here we are also playing with many different tools, are we? 

If you want to detach from the logs tail and just let the process run in background type `Ctrl+c`.

In order to stop the application you have to use some Docker commands:

	# find out your container's id:
	docker ps
	
	# stop your app
	docker stop {containerId}
	
## Real World Development Environment

I've been playing around with projects that used to require very specific versions of MySQL and ElasticSearch, or projects that run Wordpress (so *AMP environment)... And I didn't like it at all.

> I remember a specific case in which **it took two days for the former consultant to hand 
> over the project to me** because he couldn't really remember how things were wired up 
> and nothing was working on my machine!

With Docker you can easily forget about those problems! They are gone! You just run a script (it will get even easier with `docker-compose`) and you are up and running! (and your working machine keeps clean)
	



