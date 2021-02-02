FROM node:alpine

WORKDIR /usr/src/app/
COPY package.json tsconfig.json ./
COPY src ./src
RUN yarn && \
    yarn tsc && \
    mkdir files && \
    mkdir build

CMD yarn start