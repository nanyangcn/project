FROM node:alpine

WORKDIR /usr/src/app/
COPY package.json tsconfig.json ./
COPY src ./src
COPY public ./public
RUN yarn && \
    yarn build
    
CMD yarn serve