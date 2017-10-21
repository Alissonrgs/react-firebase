FROM node:6.11.4
EXPOSE 3000
ENV HOME=/home/app
RUN mkdir ${HOME} ${HOME}/src ${HOME}/public
COPY ./public ${HOME}/public
COPY ./src ${HOME}/src
COPY ./package.json ${HOME}
WORKDIR ${HOME}
RUN npm install
CMD [ "npm", "start" ]