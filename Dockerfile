FROM node:alpine

WORKDIR /usr/src/app/client
COPY client/package.json client/tsconfig.json ./
COPY client/src ./src
COPY client/public ./public
RUN yarn && \
    yarn build && \
    rm -r node_modules 

WORKDIR /usr/src/app/server
COPY server/package.json server/tsconfig.json ./
COPY server/src ./src
RUN yarn && \
    yarn tsc && \
    mkdir files

CMD yarn start