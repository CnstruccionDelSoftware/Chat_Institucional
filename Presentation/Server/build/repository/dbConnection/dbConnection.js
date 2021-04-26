"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var dbConnection = (function () {
    function dbConnection() {
        this.connection = mysql2_1.default.createConnection({
            host: '35.221.18.8',
            user: 'root',
            password: 'master',
            database: 'ChatAppIntecDB'
        });
    }
    return dbConnection;
}());
exports.default = dbConnection;
//# sourceMappingURL=dbConnection.js.map