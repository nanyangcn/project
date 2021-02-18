import { connect, StringCodec, NatsError, Msg } from 'nats';

import message from './utils/message';

const sc = StringCodec();

const main = async () => {
  const nc = await connect({ servers: 'my-nats:4222' });
  console.log('Connected to NATS server');

  nc.subscribe('todo', {
    callback: (err: NatsError | null, msg: Msg) => {
      if (err) throw err;
      message.sendMessage(sc.decode(msg.data));
    },
  });
};

void main();