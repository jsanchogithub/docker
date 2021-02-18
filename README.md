## Please, note that this repositoty is under construction!

# Docker!

Previous digging into the Docker's details, let's find a server where we can deploy and test our work.

Following the steps in:
https://medium.com/@justkrup/deploy-a-docker-container-free-on-heroku-5c803d2fdeb1 (in 2021-02-18)

We will need:
To create an Heroku account.
To install Heroku CLI in our computer
To have Docker working in our computer.


Once we have all this stuff, we can go on. 
For more details when using Heroku CLI, we can consult:
https://devcenter.heroku.com/articles/using-the-cli


Briefly, we create an APP_NAME in Heroku. Associated with this APP_NAME we'll have an URL for visiting our page.
Then, we deploy our Docker work over the APP_NAME. Then we can validate in the URL.

To start: in a terminal window, in the folder we have our Dockerfile, we connect to Heroku:
heroku login   // (opens a browser for login)
heroku container:login   //needed as well for working with containers

For creating an APP_NAME:
heroku create  // that give us an URL, we have to extract the APP_NAME from the URL.

To know all the APP_NAMEs we have:
heroku apps  //it's possible as well inside the heroku account (on then browser)

On my case:
URL is https://fathomless-thicket-72625.herokuapp.com/

wich means that APP_NAME = fathomless-thicket-72625
my app name is fathomless-thicket-72625 


heroku container:push web -a APP_NAME
heroku container:release web -a APP_NAME

On my case:

heroku container:push web -a fathomless-thicket-72625	// to deploy to Heroku server
heroku container:release web -a fathomless-thicket-72625 	// to make it visible in the web<br><br>

<em>Last update of this repository: 2021-02-16 (readme file reorganization) </em>