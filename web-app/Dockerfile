FROM node:lts-alpine

RUN mkdir -p usr/node/app
WORKDIR /usr/node/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]
