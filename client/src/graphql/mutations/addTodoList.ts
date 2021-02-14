import { gql } from '@apollo/client';

import { TODOLIST_DETAILS } from '../fragments/todoList';

export const CREATE_TODOLIST = gql`
  mutation createTodoLists($title: String!, $done: Boolean!){
    addTodoList(
      title: $title
      done: $done
    ) {
      ...TodoListDetails
    }
  }
  ${TODOLIST_DETAILS}
`;