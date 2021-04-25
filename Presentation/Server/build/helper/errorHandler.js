"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var catchErrors = function (fn) {
    return function (req, res, next) {
        try {
            fn(req, res, next);
        }
        catch (err) {
            if (typeof (err) == "string") {
                res.status(400).json({
                    message: err,
                });
            }
            else {
                next(err);
            }
        }
    };
};
exports.default = catchErrors;
//# sourceMappingURL=errorHandler.js.map