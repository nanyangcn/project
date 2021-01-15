export interface TodoList {
  title: string;
}

let todoLists = [
  {
    title: 'TODO 1',
  },
  {
    title: 'TODO 2',
  }
];

const getAll = (): TodoList[] => todoLists;

const addOne = (newTodoList: TodoList): TodoList => {
  todoLists = todoLists.concat(newTodoList);
  return newTodoList;
};
  
export default {
  getAll,
  addOne,
};