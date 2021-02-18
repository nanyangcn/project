import { connect, StringCodec, NatsConnection } from 'nats';
import { TodoList } from './todoLists';

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

const messageGenerator = (object: TodoList, state: string) => {
  const message_state = `A task was <i>${state}</i>: `;
  const message = `<code>${JSON.stringify(object, null, '\t')}</code>`;
  return `\n\n${message_state}\n\n${message}\n\n`;
};

export default {
  init,
  publish,
  close,
  messageGenerator
};