# Deal With Images

A **docker image** is the prototype Docker uses to build containers.

## List existing images

Docker stores all the images you use to create containers in your local machine. You can see them all with the following command:

	docker pull ubuntu && docker images

![docker images output](./docker-images.png)

**Oh wait! Why do I see two images?**

As expected there is an "ubuntu" image on our list (we just pulled it) but we also see an "hello-world" (I'm assuming you are running all the examples of those tutorials, please do that and tell your friends!)


## Docker Hub

Have you ever wake up wondering:

> from where my images come from?  
> - <small>me in the morning</small>

I did once, and I got lucky as the answer is straightforward. Images come from [DockerHub](https://hub.docker.com/). You can imagine DockerHub as a GitHub for Docker images.

Every image can be versioned, pulled and pushed just like a GitHub repository. 

- of course you can create your own account
- of course you can push your own images
- of course is free for public projects!

## Image Identifier

An image is universally idetified by string:

	{host}/{username}/{image-name}:{image-tag}
	
If you omit the host Docker assumes it to be DockerHub.

When you download an image Docker assign to her a local identifier whit a _machine2machine_ purpose (I challenge you to remember those ids!)

You will mostly use the human readable name to `pull` or `run` a specific image.


## Remove a container

Every image holds memory.  
You don't want to waste memory on an _Hello World_ image, or do you?

Well, I assume you are a cleaning freak like me (only applied to your fs ofc!) and you want to remove unuseful stuff asap:

	docker rmi {{IMAGE_ID}}

## Cleanup Everything

While you learn Docker you may want to clean up your computer from all the existing images because you will be busy fetching new ones every second of your life. Here is the script:

	# remove all the images
	docker rmi $(docker images -q)
	
**NOTE:** you have to remove each container before Docker allows you to remove the relative image!
	
## Custom Images