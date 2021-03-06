import express from 'express';
import "express-async-errors";
import { ApolloServer } from "apollo-server-express";
// import morgan from 'morgan';
import fs from 'fs';
import axios from 'axios';

import middleware from './utils/middleware';
import schema from './graphql/schema';
import dbTodoList from './utils/db';
import nats from './utils/nats';

const natsConnect = async () => {
  try {
    await nats.init();   
    console.log('Conneted to NATS server');
  } catch (err) {
    console.error('Error on connecting to NATS!');
  };
};
void natsConnect();

const app = express();

// app.use(morgan('tiny'));
app.use(express.json());
// app.use(express.static('/usr/src/app/dist'));

const PATH = '/usr/src/app/files/1200.jpg';

app.get('/', (_req, res) => {
  res.send('health check');
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.get('/healthz', async (_req, res) => {
  if (await dbTodoList.dbCheck())
    res.status(200).end();
  res.status(500).end();
});

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
  formatError: (err) => {
    console.error(`ERROR: ${err.message}`);
    return err;
  }
});

server.applyMiddleware({ app });

export default app;