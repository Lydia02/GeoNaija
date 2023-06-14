import express from "express";
import dotenv from 'dotenv';
import { connectDB } from './db';
import { signup } from './controllers/authController';

import limiter from './middleware/rateLimit';

import stateRouter from './routes/stateRoute'

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app= express();
app.use(express.json());
app.use(limiter);

//Signup route
app.post('/signup', signup);
app.use('/states', stateRouter);

// Start the server
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
