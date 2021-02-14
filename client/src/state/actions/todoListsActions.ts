import { TodoList } from '../types/todoListsTypes';

export const initializeTodolists = (todoLists: TodoList[]) => {
  return {
    type: 'INITIALIZE',
    data: todoLists,
  };
};

export const createTodoList = (todoList: TodoList) => {
  return {
    type: 'CREATE',
    data: todoList,
  };
};

export const updateTodoList = (todoList: TodoList) => {
  return {
    type: 'UPDATE',
    data: todoList,
  };
};
