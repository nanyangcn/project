import { gql } from '@apollo/client';

import { TODOLIST_DETAILS } from '../fragments/todoList';

export const CREATE_TODOLIST = gql`
  mutation createTodoLists($title: String!){
    addTodoList(
      title: $title
    ) {
      ...TodoListDetails
    }
  }
  ${TODOLIST_DETAILS}
`;