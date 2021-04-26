"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var messageSchema = new mongoose.Schema({
    id_student: {
        type: mongoose.Schema.Types.ObjectId,
        require: 'Id Student is required!'
    },
    id_course: {
        type: mongoose.Schema.Types.ObjectId,
        require: 'Id Course is required!'
    },
    content: {
        type: String,
        require: 'content is required!'
    }
});
exports.default = mongoose.model('Message', messageSchema);
//# sourceMappingURL=MessageModel.js.map