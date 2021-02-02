"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todoLists = [
    {
        title: 'TODO 1',
    },
    {
        title: 'TODO 2',
    }
];
const getAll = () => todoLists;
const addOne = (newTodoList) => {
    todoLists = todoLists.concat(newTodoList);
    return newTodoList;
};
exports.default = {
    getAll,
    addOne,
};
