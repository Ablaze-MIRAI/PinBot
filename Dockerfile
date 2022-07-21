FROM node:16.16.0-alpine3.15

COPY . .

RUN yarn install \
    yarn compile

CMD [ "node", "dist/main.js" ]