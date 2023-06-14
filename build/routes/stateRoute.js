"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var stateController_1 = require("../controllers/stateController");
var redisCache_1 = __importDefault(require("../redisCache"));
var auth_1 = require("../middleware/auth");
// import { limiter } from '../middleware/rateLimit';
var StateRouter = express_1.default.Router();
// Route to get all States
StateRouter.get('/', auth_1.authenticate, function (req, res) {
    (0, stateController_1.getAllStates)(req, res, redisCache_1.default);
});
exports.default = StateRouter;
