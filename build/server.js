"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var db_1 = require("./db");
var authController_1 = require("./controllers/authController");
var rateLimit_1 = __importDefault(require("./middleware/rateLimit"));
var stateRoute_1 = __importDefault(require("./routes/stateRoute"));
// Load environment variables
dotenv_1.default.config();
// Connect to the database
(0, db_1.connectDB)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(rateLimit_1.default);
//Signup route
app.post('/signup', authController_1.signup);
app.use('/states', stateRoute_1.default);
// Start the server
var PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;
app.listen(PORT, function () {
    console.log("Server started on port ".concat(PORT));
});
