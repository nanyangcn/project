import { TodoList, TodoListsAction } from '../types/todoListsTypes';

const reducer = (state: TodoList[] = [], action:TodoListsAction) => {
  switch (action.type) {
    case 'INITIALIZE': {
      const newState = [...action.data];
      return newState;
    }
    case 'CREATE': {
      const newState = [...state, action.data];
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;