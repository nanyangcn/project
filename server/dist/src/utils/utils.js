"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRows = exports.isTodoLists = exports.isTodoList = void 0;
const isTodoList = (row) => {
    return typeof row.title === 'string';
};
exports.isTodoList = isTodoList;
const isTodoLists = (rows) => {
    return rows.every((row) => exports.isTodoList(row));
};
exports.isTodoLists = isTodoLists;
const parseRows = (rows) => {
    if (!rows || !exports.isTodoLists(rows))
        throw new Error('Invalid rows');
    return rows;
};
exports.parseRows = parseRows;
