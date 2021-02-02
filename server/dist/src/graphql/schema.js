"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const lodash_1 = require("lodash");
const TodoList_1 = __importDefault(require("./types/TodoList"));
const allTodoLists_1 = __importDefault(require("./queries/allTodoLists"));
const addTodoList_1 = __importDefault(require("./mutations/addTodoList"));
const typeDefs = [
    TodoList_1.default.typeDefs,
    allTodoLists_1.default.typeDefs,
    addTodoList_1.default.typeDefs,
];
const resolvers = lodash_1.merge(TodoList_1.default.resolvers, allTodoLists_1.default.resolvers, addTodoList_1.default.resolvers);
const schema = apollo_server_express_1.makeExecutableSchema({
    typeDefs,
    resolvers,
});
exports.default = schema;
