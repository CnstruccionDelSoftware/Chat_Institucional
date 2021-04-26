"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var mysql = (function () {
    function mysql(database) {
        if (database === "mysql") {
            this.sequelize = new sequelize_1.Sequelize('mysql://root:master@35.221.18.8/ChatAppIntecDB', { dialect: 'mysql' });
        }
        else {
            this.sequelize = null;
        }
    }
    return mysql;
}());
exports.default = mysql;
//# sourceMappingURL=mysql.js.map