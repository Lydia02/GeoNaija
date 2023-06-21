"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var location_controller_1 = require("../controller/location.controller");
var express_1 = __importDefault(require("express"));
var authMiddleware_1 = require("../middleware/authMiddleware");
var locationRouter = express_1.default.Router();
locationRouter.get('/region', authMiddleware_1.authMiddleware, location_controller_1.getRegions);
locationRouter.get('/state', authMiddleware_1.authMiddleware, location_controller_1.getState);
locationRouter.get('/lga', authMiddleware_1.authMiddleware, location_controller_1.getLocalGvt);
module.exports = locationRouter;
