import { NatsError, Msg } from 'nats';

import message from './utils/message';
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

nats.subscribe((err: NatsError | null, msg: Msg) => {
  if (err) throw err;
  message.sendMessage(msg);
});
