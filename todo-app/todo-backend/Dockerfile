FROM node:16

USER node

WORKDIR /usr/src/app  

COPY . .

RUN npm ci

ENV DEBUG=todo-backend:*

CMD npm start
