import { gql } from '@apollo/client';

import { TODOLIST_DETAILS } from '../fragments/todoList';

export const UPDATE_TODOLIST = gql`
  mutation updateTodoLists($id: ID!, $title: String!, $done: Boolean!){
    editTodoList(
      id: $id
      title: $title
      done: $done
    ) {
      id
      ...TodoListDetails
    }
  }
  ${TODOLIST_DETAILS}
`;