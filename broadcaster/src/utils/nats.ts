import { connect, StringCodec, NatsConnection, NatsError, Msg } from 'nats';

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

const subscribe = (callback: ((err: NatsError | null, msg: Msg) => void) | undefined) => {
  nc.subscribe('todo', { callback });
};

const close = async() => {
  await nc.drain();
};

export default {
  init,
  publish,
  subscribe,
  close
};