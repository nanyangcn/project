import axios from 'axios';
import { Msg } from 'nats';

import config from './config';

const TELEGRAM_URL = config.TELEGRAM_URL;
const CHAT_ID = config.CHAT_ID;

const msgTitle = '<b>Todos NATS broadcaster</b>';
const msgFoot = 'broadcasted by <code>r</code> @ <code>p</code>';

const sendMessage = async (msgBody: Msg) => {
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