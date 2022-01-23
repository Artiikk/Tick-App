# Getting Started with Tick App

There are 2 approaches to run this app:
1. To avoid any compatability problems use [Docker](https://www.docker.com/) approach.
* `docker build . -t tick-app`
* `docker run --rm -d -p 3000:3000 tick-app`

2. Simply use `npm install && npm run start`

For testing purposes please use `npm run test` command
