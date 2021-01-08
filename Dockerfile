FROM node:alpine

WORKDIR /usr/src/app/client
COPY client/package.json client/tsconfig.json ./
COPY client/src ./src
COPY client/public ./public
RUN yarn && \
    yarn build && \
    rm -r node_module 

WORKDIR /usr/src/app
COPY package.json tsconfig.json index.ts ./
RUN yarn && \
    yarn tsc && \
    rm -r node_module && \
    mkdir files

CMD yarn start