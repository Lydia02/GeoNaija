"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var stateSchema = new mongoose_1.default.Schema({
    state: String,
    capital: String,
    slogan: String,
    dialect: String,
    past_governors: String,
    senatorial_districts: String,
    population: String,
    website: String,
    created_date: String,
    created_by: String,
    known_for: String,
});
exports.default = mongoose_1.default.model('State', stateSchema);
