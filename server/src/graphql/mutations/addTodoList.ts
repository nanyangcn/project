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
    addTodoList: async (_root, args) => {
      const response = await dbTodoList.dbAddOne(args);
      console.log(`CREATE a todolist: ${JSON.stringify(response)}`);
      return response;
    },
  }
};

export default {
  typeDefs,
  resolvers,
};
