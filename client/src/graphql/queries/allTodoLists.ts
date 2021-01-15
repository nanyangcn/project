import { gql } from '@apollo/client';

import { TODOLIST_DETAILS } from '../fragments/todoList';

export const GET_TODOLISTS = gql`
  query getTodoLists{
    allTodoLists{
      ...TodoListDetails
    }
  }
  ${TODOLIST_DETAILS}
`;