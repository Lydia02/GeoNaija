"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = require("./db/db");
var app = (0, express_1.default)();
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var port = process.env.PORT || 3000;
var auth_route_1 = __importDefault(require("./routes/auth.route"));
var location_route_1 = __importDefault(require("./routes/location.route"));
var rate_limiter_1 = require(".//middleware/rate-limiter");
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_definitions_1 = require("./middleware/swagger-definitions");
var swaggerSpec = (0, swagger_jsdoc_1.default)(swagger_definitions_1.swaggerDefinition);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use('/auth', rate_limiter_1.rateLimiter, auth_route_1.default);
app.use('/location', rate_limiter_1.rateLimiter, location_route_1.default);
app.get('/', function (req, res) {
    res.send('Welcome to the location api');
});
(0, db_1.connectMongoDB)();
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
