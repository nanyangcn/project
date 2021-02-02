"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const dotenv_1 = __importDefault(require("dotenv"));
const utils_1 = require("./utils");
dotenv_1.default.config();
const Pool = pg_1.default.Pool;
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: 'project-db-svc',
    port: 5432
});
const dbInit = async () => {
    await pool.query('CREATE TABLE IF NOT EXISTS todo (id SERIAL PRIMARY KEY, title VARCHAR(140) NOT NULL)');
};
void dbInit();
const dbGetAll = async () => {
    const response = await pool.query('SELECT * FROM todo');
    return utils_1.parseRows(response.rows);
};
const dbAddOne = async (newTodoList) => {
    await pool.query(`INSERT INTO todo (title) VALUES ($1)`, [newTodoList.title]);
    return newTodoList;
};
exports.default = {
    dbInit,
    dbGetAll,
    dbAddOne
};
