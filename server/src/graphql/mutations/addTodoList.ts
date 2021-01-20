import { gql } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

// import todoLists from '../../utils/todoLists';
import dbTodoList from '../../utils/db';

const typeDefs = gql`
  type Mutation {
    addTodoList(
      title: String
    ): TodoList
  }
`;

const resolvers: IResolvers = {
  Mutation: {
    addTodoList: (_root, args) => dbTodoList.dbAddOne(args),
  }
};

export default {
  typeDefs,
  resolvers,
};
