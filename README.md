# Getting Started with Tick App

This app is deployed to the [Github Pages](https://pages.github.com/) and you can find it [here](https://artiikk.github.io/Tick-App/).

In case you want to set it up locally, please follow one of these approaches:

1. To avoid any compatability problems use [Docker](https://www.docker.com/) approach.
* `docker build . -t tick-app`
* `docker run --rm -d -p 3000:3000 tick-app`

2. Simply use `npm install && npm run start`

For testing purposes please use `npm run test` command
