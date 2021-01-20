import { TodoList } from './todoLists';

export const isTodoList = (row: TodoList): row is TodoList => {
  return typeof row.title === 'string';
};

export const isTodoLists = (rows: TodoList[]): rows is TodoList[] => {
  return rows.every((row: TodoList) => isTodoList(row));
};

export const parseRows = (rows: TodoList[]): TodoList[] => {
  if (!rows || !isTodoLists(rows))
    throw new Error('Invalid rows');
  return rows;
};