import dotenv from 'dotenv';

dotenv.config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '';
if (TELEGRAM_TOKEN === '') {
  console.log('Error: please define your TELEGRAM_TOKEN');
};

const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const PORT = process.env.PORT || 3001;
const CHAT_ID = process.env.CHAT_ID || '';
if (TELEGRAM_TOKEN === '') {
  console.log('Error: please define your CHAT_ID');
};

const MY_POD_NAME = process.env.MY_POD_NAME || '';
if (MY_POD_NAME === '') {
  console.log('Error: please define your MY_POD_NAME');
};

export default {
  PORT,
  TELEGRAM_TOKEN,
  TELEGRAM_URL,
  CHAT_ID,
  MY_POD_NAME
};