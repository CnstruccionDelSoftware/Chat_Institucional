"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerStudent = exports.loginStudent = void 0;
var Student_1 = require("../domain/Model/Student");
var ServiceChatImpl_1 = __importDefault(require("../service/ServiceChatImpl"));
var jwt = require('jwt-then');
var crypto_js_1 = __importDefault(require("crypto-js"));
var serviceChat = new ServiceChatImpl_1.default();
var loginStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, student, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4, serviceChat.login(username, crypto_js_1.default.SHA256(password + process.env.SALT).toString())];
            case 1:
                student = _b.sent();
                return [4, jwt.sign({ username: username }, process.env.SECRET)];
            case 2:
                token = _b.sent();
                student.password = '';
                res.json({
                    message: "User logged in succesfully!",
                    token: token,
                    student: student
                });
                return [3, 4];
            case 3:
                err_1 = _b.sent();
                res.status(401).json({
                    message: err_1,
                });
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.loginStudent = loginStudent;
var registerStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, name_1, lastname, studentExists, student, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password, name_1 = _a.name, lastname = _a.lastname;
                return [4, Student_1.Student.findOne({ username: username })];
            case 1:
                studentExists = _b.sent();
                if (studentExists)
                    throw "Student already exists";
                return [4, Student_1.Student.create({
                        username: username,
                        password: crypto_js_1.default.SHA256(password + process.env.SALT).toString(),
                        name: name_1,
                        lastname: lastname
                    })];
            case 2:
                student = _b.sent();
                student.save();
                res.json({
                    message: "User registered succesfully!",
                });
                return [3, 4];
            case 3:
                err_2 = _b.sent();
                res.status(401).json({
                    message: err_2,
                });
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.registerStudent = registerStudent;
//# sourceMappingURL=loginController.js.map