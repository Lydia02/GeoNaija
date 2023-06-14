// import redis, { RedisClient } from 'redis';
import dotenv from 'dotenv';
import Redis from 'ioredis';

// Load environment variables from .env file
dotenv.config();

const REDIS_URI = process.env.REDIS_URI || ''; // Provide a default value (an empty string in this case) if undefined

let client: Redis;

if (REDIS_URI) {
  client = new Redis (REDIS_URI) 
} else {
  console.error('REDIS_URI is not defined');
  process.exit(1);
}

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (error: Error) => {
  console.error('Failed to connect to Redis', error);
});

export default client;
