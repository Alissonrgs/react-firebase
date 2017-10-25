FROM node:6.11.4
EXPOSE 8080
ENV HOME=/home/app
RUN mkdir ${HOME} ${HOME}/src
COPY ./src ${HOME}/src
COPY ./.babelrc ${HOME}
COPY ./package.json ${HOME}
COPY ./webpack.config.js ${HOME}
WORKDIR ${HOME}
RUN npm install
CMD [ "npm", "start" ]