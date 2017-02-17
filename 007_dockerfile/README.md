# Work with Dockerfile

In the previous tutorial you learn how to run an _NGiNX_ web server and connect it to a local folder in your working machine.

This represent a typical development setup in which you use Docker to wrap one (or more) services into isolated and well organised containers. Basically you avoid to mess up with your OS and your life is now improved.

Now it is time to ship your website to production, and you want to use Docker as well. 

## The general idea is to...

1. buy a Linux box on Amazon
2. install Docker
3. pull the ready-to-use website image
4. run it
5. point DNS
6. go for a beer

**NOTE:** we are not going to cover in details how to deploy Docker to production for real, it is beyond the scope of this tutorial. Here and now we just keep it easy.

## Custom Image

You already know that an [NGiNX](https://nginx.org/) image is freely available to run a website. What if you could duplicate that and **copy** your `/users/awesome/www` into the cloned image so to avoid to specify the _Volume_ setting? 

> Is that possible?  
> **Of course it is!**

A **custom image** is normally an extension of an existing one in which you apply some kind of custom commands. Typically you copy some files or install some software.

_NGiNX_ is an extension of [_Alpine_](https://hub.docker.com/_/alpine/) itself!

## Dockerfile

In order to build a new image definition you need to write a `Dockerfile` which is a manifest of steps that Docker will perform to take an existing image and extend to suit your needs.

	# Dockerfile
	FROM nginx:1.11
	COPY www /usr/share/nginx/html
	
This is all the source you need to generate a new custom image which contains both NGiNX and your mighty static HTML website.

**NOTE:** _Docker_ assumes that the folder `www` which contains your website sources is a sibling of your `Dockerfile`.

**NOTE:** I suggest you always use a specific image version `:1.11` in you _Dockerfile_ so the result of the build will be predictable. 

> If you use `:latest` and rebuild your custom image one year from now things may 
> break due to failed backward compatibility of the base image.

### What is the best way to learn Dockerfile?

> Good artists copy. **Great artists steal**.  
> <small>-- Pablo Picasso</small>

While you can dig into the [ufficial Dockerfile documentation](https://docs.docker.com/engine/reference/builder/) I suggest you to investigate how exsisting images are built. Most of them have GitHub repositories from which you can access their Dockerfile.


## Build it!

Once your Dockerfile is ready you should open a terminal session, `cd` into its folder and issue:

	docker build -t my-nginx:1.11 .

### Name your image

Use the flag `-t` to assign a tag to the newly created image.

Actually the tag value is composed by `{IMAGE_NAME}:{IMAGE_VERSION}`. If you omit the version token then the default value `latest` will be applied by Docker.

> When you work with real projects you may want to build images tagged and versioned
> after your own Git repository tags.

## Run it!

Let's test your image! If everything went well you should be able to run your new image, set a port, and get your website out of it:

	docker run -p 8080:80 my-nginx
	
> Did it work? Sure it did :-)

## Share your images

- Did you create a good piece of open source software?
- Do you want the world to try it out in the easiest possible way?

You can create a free account on DockerHub in which to publish your images. If you know how to push to GitHub then there is nothing more to say. The only detail is that you should tag your images as:

	{DOCKERHUB_USERNAME}/{IMAGE_NAME}:{IMAGE_VERSION}
	
[Have fun with that and check out my public ones!](https://hub.docker.com/u/marcopeg/)