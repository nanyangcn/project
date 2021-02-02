import express from 'express';
import "express-async-errors";
import { ApolloServer } from "apollo-server-express";
// import morgan from 'morgan';
import fs from 'fs';
import axios from 'axios';

import middleware from './utils/middleware';
import schema from './graphql/schema';

const app = express();

// app.use(morgan('tiny'));
app.use(express.json());
// app.use(express.static('/usr/src/app/dist'));

const PATH = '/usr/src/app/files/1200.jpg';
  
app.get('/picture', (_req, res) => {
  const sendPicture = async () => {
    if (!fs.existsSync(PATH)) {
      const response = await axios.get<NodeJS.ReadWriteStream>('https://picsum.photos/1200', { responseType: 'stream' });
      const stream: fs.WriteStream = response.data.pipe(fs.createWriteStream(PATH));
      stream.on('finish', () => res.sendFile(PATH));
    } else {
      res.sendFile(PATH);
    }
  };
  void sendPicture();
});

app.use(middleware.errorhandler);

const server = new ApolloServer({
  schema,
  playground: true,
  formatError: (err) => {
    console.error(`CREATE FAIL! ERROR: ${err.message}`);
    return err;
  }
});

server.applyMiddleware({ app });

export default app;