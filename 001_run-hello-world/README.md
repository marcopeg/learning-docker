# Run Hello World

The first step do move once you have [Docker](https://www.docker.com/) (scroll down to the "download" section) running on your machine is to **run a container**.

## `docker run {{image-name}}`

This is is the simple command you need to **run an existing image**. If you don't have such image available in your local machine Docker will download it for you from [Docker Hub](https://hub.docker.com).

	# run this, if you can!
	docker run --rm hello-world
	
## `--rm`

As many other command line utilities `docker` takes optional arguments (flags) and this is a very useful one as it tells _Docker_ to **clean up the container after the execution**.

> Whhaat?  
> <small>- anonymous</small>

## Images and Containers

_Docker_ works with two main concepts:

- images
- containers

For sake of simplicity you can picture in your mind a classic "Linux distribution CD-ROM" (wow, do you remember CD-ROM???).

The CD represents the **docker image**, then you use that CD to install Linux on your machine. That computer will become the **docker container**. When you turn it on you will obtain a **running container**.

This is the super short (and partially incorrect) version of the story, you may want to [read more here](http://stackoverflow.com/questions/23735149/docker-image-vs-container).