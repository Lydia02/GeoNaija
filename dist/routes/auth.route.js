"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var auth_controller_1 = require("../controller/auth.controller");
var express_1 = __importDefault(require("express"));
var authRouter = express_1.default.Router();
var required_fields_1 = require("../middleware/required-fields");
authRouter.post('/signup', (0, required_fields_1.validateRequiredFields)(['email', 'password', 'first_name', 'last_name', 'retype_password']), auth_controller_1.signup);
authRouter.post('/verify', (0, required_fields_1.validateRequiredFields)(['API_key']), auth_controller_1.verify);
module.exports = authRouter;
