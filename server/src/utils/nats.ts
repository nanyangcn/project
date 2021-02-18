import ns from 'nats';

const sc = ns.StringCodec();

let nc: ns.NatsConnection;

const connect = async () => {
  nc = await ns.connect({
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
  connect,
  publish,
  close
};