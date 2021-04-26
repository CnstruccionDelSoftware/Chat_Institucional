"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 'Name is required!'
    },
    lastname: {
        type: String,
        require: 'Last Name is required!'
    },
    password: {
        type: String,
        require: 'Password is required!'
    },
    username: {
        type: String,
        require: 'Username is required!'
    },
});
exports.default = mongoose.model('Student', studentSchema);
//# sourceMappingURL=StudentModel.js.map