import axios from 'axios';

import config from './utils/config';
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

const TELEGRAM_URL = config.TELEGRAM_URL;
const CHAT_ID = config.CHAT_ID;

const sendMessage = async (message: string) => {
  await axios.get(`${TELEGRAM_URL}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${message}`);
  console.log('Send message successfully!');
};

const object = {
  title: 'TODO 1',
  done: false,
};

const message = `<code>${JSON.stringify(object, null, '\t')}</code>`;

const mes_title = '<b>Todos NATS broadcaster</b>';
const mes_subtitle = 'A task was <i>created</i>: ';
const mes_foot = 'broadcasted by <code>r</code> @ <code>p</code>';
void sendMessage(`${mes_title}\n\n${mes_subtitle}\n\n${message}\n\n${mes_foot}`);
