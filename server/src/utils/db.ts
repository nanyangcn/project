import pg from 'pg';
import dotenv from 'dotenv';

import { parseRows } from './utils';
import { TodoList } from './todoLists';

dotenv.config();

const Pool = pg.Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: 'project-db-svc',
  port: 5432
});

const dbInit = async (): Promise<void> => {
  await pool.query('CREATE TABLE IF NOT EXISTS todo (id SERIAL PRIMARY KEY, title VARCHAR(140) NOT NULL)');
};
void dbInit();

const dbGetAll = async (): Promise<TodoList[]> => {
  const response = await pool.query('SELECT * FROM todo');
  return parseRows(response.rows);
};

const dbAddOne = async (newTodoList: TodoList): Promise<TodoList> => {
  await pool.query(`INSERT INTO todo (title) VALUES ($1)`,
    [newTodoList.title]);
  return newTodoList;
};

const dbCheck = async (): Promise<boolean> => {
  try {
    await pool.query('SELECT * FROM todo LIMIT 1');
    return true;
  } catch (err) {
    return false;
  }
}

export default {
  dbInit,
  dbGetAll,
  dbAddOne,
  dbCheck
};