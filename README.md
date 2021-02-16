## Please, note that this file is under construction!

# Docker!

https://medium.com/@justkrup/deploy-a-docker-container-free-on-heroku-5c803d2fdeb1

If you want to follow along you’ll need a Heroku account and the following:
Heroku CLI
Docker

https://fathomless-thicket-72625.herokuapp.com/

My app name is fathomless-thicket-72625 

fathomless-thicket-72625

https://devcenter.heroku.com/articles/using-the-cli

https://safe-dawn-42098.herokuapp.com/ | https://git.heroku.com/safe-dawn-42098.git


heroku login 
(opens a browser for login)

heroku container:login
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

heroku create
heroku container:push -a APP_NAME
heroku container:release -a APP_NAME

It seems that it is:
heroku create
heroku container:login
heroku container:push web -a APP_NAME
heroku container:release web -a APP_NAME

This can be a npm package!


2021-02-16	readme	reorganize