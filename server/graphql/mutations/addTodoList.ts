import { gql } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

import todoLists from '../../utils/todoLists';

const typeDefs = gql`
  type Mutation {
    addTodoList(
      title: String
    ): TodoList
  }
`;

const resolvers: IResolvers = {
  Mutation: {
    addTodoList: (_root, args) => todoLists.addOne(args),
  }
};

export default {
  typeDefs,
  resolvers,
};
