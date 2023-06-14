"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import redis, { RedisClient } from 'redis';
var dotenv_1 = __importDefault(require("dotenv"));
var ioredis_1 = __importDefault(require("ioredis"));
// Load environment variables from .env file
dotenv_1.default.config();
var REDIS_URI = process.env.REDIS_URI || ''; // Provide a default value (an empty string in this case) if undefined
var client;
if (REDIS_URI) {
    client = new ioredis_1.default(REDIS_URI);
}
else {
    console.error('REDIS_URI is not defined');
    process.exit(1);
}
client.on('connect', function () {
    console.log('Connected to Redis');
});
client.on('error', function (error) {
    console.error('Failed to connect to Redis', error);
});
exports.default = client;
