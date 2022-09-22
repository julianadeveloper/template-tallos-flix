FROM node:14-alpine

WORKDIR /home/admin-front

RUN npm uninstall node-sass

RUN npm i -D sass

COPY . .

EXPOSE 8008
