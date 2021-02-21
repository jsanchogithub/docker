## Please, note that this repositoty is under construction!

# Docker!

Contents of this repo:

1.- How to deploy an Docker container into the remote server (to Heroku, in this case).<br>
2.- Some examples of Docker constainers.

## 1.- How to deploy an Docker container into the remote server.

First of all, let's prepare the remote server.

Following the steps in<br>
https://medium.com/@justkrup/deploy-a-docker-container-free-on-heroku-5c803d2fdeb1 (2021-02-18)

We will need:<br>
To create an Heroku account.<br>
To install Heroku CLI in our computer (for connecting and deploying form local computer to remote server)<br>
To have Docker working in our computer.<br>

Once we have all this stuff in our local computer, we can go on. For more details when using Heroku CLI, we can consult:<br>
https://devcenter.heroku.com/articles/using-the-cli

We are going to deploy to Heroku the Docker container in example-docker-helloworld folder.<br>

Briefly, first we create an APP_NAME in Heroku. Associated with this APP_NAME we'll have an URL for visiting our page.
Then, we deploy our Docker work over the APP_NAME. Then we can validate in the URL.<br>

1. in a terminal window, in the folder we have our Dockerfile, we connect to Heroku:<br>

	> heroku login   // (opens a browser for login)
	> heroku container:login   //needed as well for working with containers

2. For creating an APP_NAME:<br>

	> heroku create  // that give us an URL, we have to extract the APP_NAME from the URL.

3. To know all the APP_NAMEs we have in Heroku:

	> heroku apps  //it's possible as well inside the heroku account (on then browser)

4. On my case, URL is https://fathomless-thicket-72625.herokuapp.com/ wich means that my APP_NAME = fathomless-thicket-72625

5. Deploy (send to the server)<br>

	> heroku container:push web -a APP_NAME

5. Release (make it visible)<br>

	> heroku container:release web -a APP_NAME


On my case:<br>

	> heroku container:push web -a fathomless-thicket-72625	// to deploy to Heroku server<br>
	> heroku container:release web -a fathomless-thicket-72625 	// to make it visible in the web<br>

## 2.- Some examples of Docker constainers.

I expect to add some copy-paste examples in the future. For now, just the example-docker-helloworld (the one I used before).<br>


<em>Last update of this repository: 2021-02-21 (readme file final format)</em>