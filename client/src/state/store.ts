import { combineReducers, createStore } from 'redux';

import todoListReducer from './reducers/todoListsReducer';

const reducer = combineReducers({
  todoLists: todoListReducer,
});

const store = createStore(reducer);

export default store;
