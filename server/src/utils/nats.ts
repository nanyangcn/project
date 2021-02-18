import { connect, StringCodec, NatsConnection } from 'nats';

const sc = StringCodec();

let nc: NatsConnection;

const init = async () => {
  nc = await connect({
    servers: 'my-nats:4222',
  });
  return nc;
};

const publish = (message: string) => {
  nc.publish('todo', sc.encode(message));
};

const close = async() => {
  await nc.drain();
};

export default {
  init,
  publish,
  close
};