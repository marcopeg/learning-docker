# Work with Services

A _Service_ is just a background process that waits until some kind of event wakes it up so to trigger a response. A web server is a classic example.

I've packaged a simple NodeJS Service which just print an "Hello World" message in response to any request. How cool uh?

	# run a service distributed through DockerHub:
	docker run --name nodeapp -d -p 8080:8080 marcopeg/nodeapp
	
At this point you should be able to open your browser to `http://localhost:8080` and enjoy the magic of a NodeJS web service.

## detached mode

The flag `-d` tells Docker to start the container and run it background. Docker will output the running container ID which you can intercept in a bash script to do some cool stuff (check out `projects/nodeapp/scripts` for some simple ideas),

## port mapping

Almost every service you will deal with expose some kind of API on a logic port. Well, if the service wants to use port `3333` it doesn't really mean you must have that port available for it.

Use the flag `-p {HOST_PORT}:{SERVICE_PORT}` to map your desired port to the one which is exposed by the service itself. Normally this kind of informations are documented. Sometimes you have to dig into the source.

> Try to run this service on different ports!

## container logs

Almost every respectable services **should** output some logs. When (not "if") something goes wrong you may want to take a look at those logs:

	docker logs {CONTAINER_ID || CONTAINER_NAME}
	
This will output a bounch of logs (Docker will keep in memory a limited amount of lines!)

But if you want to keep an eye on the logs you should follow the logs tail using the `-f` flag:

	docker logs {CONTAINER_ID || CONTAINER_NAME} -f

## start / stop

As every other containers a service can be stopped and resumed.

**NOTE:** when you stop a service all it's volatile memory (stuff that is not stored to the file system) will be lost but file system changes will be preserved.

