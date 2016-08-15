# Work with Containers

One of the basic useful things offered by Docker is the ability to run a _Linux_ box within a Mac, Windows (and even another Linux!) which happens to be completely (and safely) isolated from your working machine.

The simplest possible thing to do is to try to run a bash terminal inside a Docker machine... because you may want to practice with a Linux box but you don't want to mess up with your local OS:
	
	# run a bash terminal inside an Ubuntu based machine
	docker run -it --rm ubuntu:latest /bin/bash
	
## What the hell is that???

Ok, there are a couple of flags and even something else after the image name. Let's take it one by one:

### `-it`

Tell Docker to keep the running container **attached** to your working machine's terminal session. Basically it allows you to issue commands and read the output to/from the container.

### `--rm`

Docker will remove the container when you stop it.

### `/bin/bash`

Tell Docker which command to execute as soon the container is running. In this case you start a bash session.

![run a bash terminal into an Ubuntu box](run-bash-termina.png)

## exit the container

## attach / detach
