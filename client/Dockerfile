FROM node:alpine

WORKDIR /usr/src/app/
COPY package.json tsconfig.json ./
COPY src ./src
COPY public ./public
RUN yarn
    
CMD yarn start