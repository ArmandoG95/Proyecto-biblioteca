"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Keys_1 = __importDefault(require("./Keys"));
const sql = require('mssql');
const pool = new sql.ConnectionPool(Keys_1.default.database);
pool.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    }
    else {
        console.log('Conectado a la base de datos');
    }
});
exports.default = pool;
/*
https://www.npmjs.com/package/mssql
https://stackoverflow.com/questions/49185969/connectionerror-failed-to-connect-to-localhostundefined-in-15000ms?noredirect=1&lq=1
https://www.youtube.com/watch?v=hrijeTjTHnE
*/ 
