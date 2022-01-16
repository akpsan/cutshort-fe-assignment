FROM node

RUN mkdir /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app

ENV PARH /usr/src/app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "start"]