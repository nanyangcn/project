import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';

import './App.css';

import { initializeTodolists, createTodoList, updateTodoList } from './state/actions/todoListsActions';
import CreateListForm from './components/CreateListForm';
import Lists from './components/Lists';
import { GET_TODOLISTS } from './graphql/queries/allTodoLists';
import { CREATE_TODOLIST } from './graphql/mutations/addTodoList';
import { UPDATE_TODOLIST } from './graphql/mutations/editTodoList';
import { TodoList } from './state/types/todoListsTypes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const result = useQuery(GET_TODOLISTS);

  useEffect(() => {
    if (result.data)
      dispatch(initializeTodolists(result.data.allTodoLists));
  }, [result.data]);

  const [createList] = useMutation(CREATE_TODOLIST, {
    refetchQueries: [{ query: GET_TODOLISTS }],
    onError: (err) => console.log(err),
  });

  const [updateList] = useMutation(UPDATE_TODOLIST, {
    refetchQueries: [{ query: GET_TODOLISTS }],
    onError: (err) => console.log(err),
  });

  const handleCreateTodoList = (values: TodoList): void => {
    createList({ variables: values });
    dispatch(createTodoList(values));
  };

  const handleUpdateTodoList = (values: TodoList): void => {
    updateList({ variables: values });
    dispatch(updateTodoList(values));
  };

  return (
    <div>
      <h1>TO-DO-LIST</h1>
      <div>
        <img src='./picture' alt='Picture' width='600' />
      </div>
      <CreateListForm handleCreateTodoList={handleCreateTodoList}/>
      <Lists handleUpdateTodoList={handleUpdateTodoList}/>
    </div>
  );
};

export default App;