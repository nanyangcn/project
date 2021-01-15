import { gql } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

const typeDefs = gql`
  type TodoList {
    title: String!
  }
`;

const resolvers: IResolvers = {};

export default {
  typeDefs,
  resolvers,
};