import express, { Router, Request, Response } from 'express';
import { getAllStates } from '../controllers/stateController';
import client from '../redisCache';
import { authenticate } from '../middleware/auth';
// import { limiter } from '../middleware/rateLimit';

const StateRouter: Router = express.Router();

// Route to get all States
StateRouter.get('/', authenticate, (req: Request, res: Response) => {
  getAllStates(req, res, client);
});

export default StateRouter;
