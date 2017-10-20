FROM node:6.11.4-alpine
EXPOSE 3000
RUN mkdir src public
COPY ./public /public
COPY ./src /src
COPY ./package.json .
RUN npm install
WORKDIR /src
CMD [ "npm", "start" ]