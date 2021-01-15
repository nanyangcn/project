import {makeExecutableSchema } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { merge } from 'lodash';

import TodoList from './types/TodoList';
import allTodoListsQuery from './queries/allTodoLists';
import addTodoListMutation from './mutations/addTodoList';

const typeDefs = [
  TodoList.typeDefs,
  allTodoListsQuery.typeDefs,
  addTodoListMutation.typeDefs,
];

const resolvers = merge(
  TodoList.resolvers,
  allTodoListsQuery.resolvers,
  addTodoListMutation.resolvers,
);

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;