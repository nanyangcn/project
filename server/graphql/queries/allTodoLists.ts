import { gql } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

import todoLists from '../../utils/todoLists';

const typeDefs = gql`
  type Query {
    allTodoLists: [TodoList!]!
  }
`;

const resolvers: IResolvers = {
  Query: {
    allTodoLists: () => todoLists.getAll(),
  }
};

export default {
  typeDefs,
  resolvers,
};