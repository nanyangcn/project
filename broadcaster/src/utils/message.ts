import axios from 'axios';

import config from './config';

const TELEGRAM_URL = config.TELEGRAM_URL;
const CHAT_ID = config.CHAT_ID;
const MY_POD_NAME = config.MY_POD_NAME;

const msgTitle = '<b>Todos NATS broadcaster</b>';
const msgFoot = `broadcasted by <code>${MY_POD_NAME}</code>`;

const sendMessage = async (msgBody: string) => {
  const message = `${msgTitle}${msgBody}${msgFoot}`;
  try {
    await axios.get(`${TELEGRAM_URL}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${message}`);
  } catch (err) {
    console.error('Error: Send message failed');
  }
};

export default {
  sendMessage,
}