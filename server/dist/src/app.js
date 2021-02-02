"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const apollo_server_express_1 = require("apollo-server-express");
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
const middleware_1 = __importDefault(require("./utils/middleware"));
const schema_1 = __importDefault(require("./graphql/schema"));
const app = express_1.default();
app.use(express_1.default.json());
const PATH = '/usr/src/app/files/1200.jpg';
app.get('/', (_req, res) => {
    res.send('health check');
});
app.get('/picture', (_req, res) => {
    const sendPicture = async () => {
        if (!fs_1.default.existsSync(PATH)) {
            const response = await axios_1.default.get('https://picsum.photos/1200', { responseType: 'stream' });
            const stream = response.data.pipe(fs_1.default.createWriteStream(PATH));
            stream.on('finish', () => res.sendFile(PATH));
        }
        else {
            res.sendFile(PATH);
        }
    };
    void sendPicture();
});
app.use(middleware_1.default.errorhandler);
const server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    formatError: (err) => {
        console.error(`CREATE FAIL! ERROR: ${err.message}`);
        return err;
    }
});
server.applyMiddleware({ app });
exports.default = app;
