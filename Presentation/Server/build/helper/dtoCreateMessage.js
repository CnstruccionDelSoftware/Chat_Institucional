"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dtoCreateMessage = (function () {
    function dtoCreateMessage(idest, idcr, content) {
        this.idest = idest;
        this.idcr = idcr;
        this.content = content;
    }
    dtoCreateMessage.prototype.getIdest = function () {
        return this.idest;
    };
    dtoCreateMessage.prototype.setIdest = function (idest) {
        this.idest = idest;
    };
    dtoCreateMessage.prototype.getIdcr = function () {
        return this.idcr;
    };
    dtoCreateMessage.prototype.setIdcr = function (idcr) {
        this.idcr = idcr;
    };
    dtoCreateMessage.prototype.getContent = function () {
        return this.content;
    };
    dtoCreateMessage.prototype.setContent = function (content) {
        this.content = content;
    };
    return dtoCreateMessage;
}());
exports.default = dtoCreateMessage;
//# sourceMappingURL=dtoCreateMessage.js.map