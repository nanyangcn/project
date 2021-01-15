import { gql } from '@apollo/client';

export const TODOLIST_DETAILS= gql`
  fragment TodoListDetails on TodoList {
    title
  }
`;