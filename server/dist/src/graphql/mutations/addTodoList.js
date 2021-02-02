"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const db_1 = __importDefault(require("../../utils/db"));
const typeDefs = apollo_server_express_1.gql `
  type Mutation {
    addTodoList(
      title: String
    ): TodoList
  }
`;
const resolvers = {
    Mutation: {
        addTodoList: async (_root, args) => {
            const response = await db_1.default.dbAddOne(args);
            console.log(`CREATE a todolist: ${JSON.stringify(response)}`);
            return response;
        },
    }
};
exports.default = {
    typeDefs,
    resolvers,
};
