"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginController_1 = require("../controllers/loginController");
var router = express_1.Router();
router.post("/user/login", loginController_1.loginUser);
exports.default = router;
//# sourceMappingURL=router.js.map