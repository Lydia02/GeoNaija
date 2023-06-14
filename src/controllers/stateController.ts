import { Request, Response } from 'express';
import { IState } from '../models/stateModel'; // Assuming you have a State model defined
import Redis from 'ioredis';
import * as fs from 'fs';

// Define the path to the data.json file
const dataFilePath = '../../data.json';

// Connect to Redis
// const redis = new Redis();

// Controller function to get all states
export const getAllStates = async (req: Request, res: Response, redisClient: Redis) => {
  try {
    // Check if states data is already cached in Redis
    const cachedStates = await redisClient.get('states');

    if (cachedStates) {
      // If cached data exists, return it
      const states = JSON.parse(cachedStates);
      res.json(states);
    } else {
      // If cached data doesn't exist, read the data from the JSON file
      const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
 // Extract the states from the data
 const states = data.map((item: IState) => item.state);


      // Cache the states data in Redis for future use
      await redisClient.set('states', JSON.stringify(states));

      // Send the states as the response
      res.json(states);
    }
  } catch (err) {
    console.error('Error reading data file:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
