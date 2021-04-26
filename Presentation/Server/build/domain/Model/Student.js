"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var studentSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
exports.Student = mongoose_1.default.model("Student", studentSchema);
//# sourceMappingURL=Student.js.map