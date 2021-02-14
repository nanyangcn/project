import { TodoList, TodoListsAction } from '../types/todoListsTypes';

const reducer = (state: TodoList[] = [], action: TodoListsAction) => {
  switch (action.type) {
    case 'INITIALIZE': {
      const newState = [...action.data];
      return newState;
    }
    case 'CREATE': {
      const newState = [...state, action.data];
      return newState;
    }
    case 'UPDATE': {
      const newState = state.map(todoList =>
        todoList.id === action.data.id
          ? action.data
          : todoList);
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;