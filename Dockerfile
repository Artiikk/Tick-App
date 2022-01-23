FROM node:alpine

RUN npm install -g serve

WORKDIR /app

COPY package*.json yarn.lock /app/

RUN npm install

COPY . /app/

EXPOSE 3000

RUN npm run build
CMD serve -l 3000 -s build