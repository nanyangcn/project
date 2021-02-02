"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const errorhandler = (err, _req, _res, next) => {
    logger_1.default.error(err.message);
    next(err);
};
exports.default = {
    errorhandler,
};
