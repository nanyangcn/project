export interface TodoList {
  id: string;
  title: string;
  done: boolean;
}

let todoLists = [
  {
    id: '1',
    title: 'TODO 1',
    done: false,
  },
  {
    id: '2',
    title: 'TODO 2',
    done: false,
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