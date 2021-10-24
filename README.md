# To Do app

## Simple to do app using Django and Angular

This app allow you to retrieve, create, update and delete tasks

## Dependencies

The only dependencies needed to run this app are Docker and Docker Compose

## Usage

To use this app:

- Clone this repository
- Run the following command `docker-compose up`

The Django rest API is served here: http://localhost:8000

The Angular SPA is served here: https://localhost:4200

## Things to improve

### Django

The app is not production ready. Need to be serve using a production web server like gunicorn.

Add environement variable instead of hard coded info (secret keys, debug, CORS...)

The app does not use https

Use websocket to push newly created app to clients

### Angular

The app is not production ready. Need to be built and serve over a web server (like Nginx)

Add environement variable instead of hard coded API urls

Use polling or even better, websocket to retrieve created task by other clients without refreshing the page

Use a store management library instead to store the states instead of using the `todo-list` components.
After some research, NGXS or NGRX should do the job
