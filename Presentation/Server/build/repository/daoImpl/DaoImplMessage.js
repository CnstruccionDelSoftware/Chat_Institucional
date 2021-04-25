"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Message_1 = __importDefault(require("../../domain/Entity/Message"));
var DaoImplMessage = (function () {
    function DaoImplMessage() {
        this.message_list = [new Message_1.default(1, 1, 1, 'Holaa'), new Message_1.default(2, 2, 1, 'klklk')];
    }
    DaoImplMessage.prototype.create = function (entity) {
        this.message_list.push(entity);
    };
    DaoImplMessage.prototype.modify = function (entity) {
        throw new Error("Method not implemented.");
    };
    DaoImplMessage.prototype.findAll = function () {
        return this.message_list;
    };
    return DaoImplMessage;
}());
exports.default = DaoImplMessage;
//# sourceMappingURL=DaoImplMessage.js.map