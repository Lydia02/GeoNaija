import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import UserModel from '../models/authModel';

// Signup function
async function signup(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Remove any existing user with the same email
    await UserModel.deleteOne({ email });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserModel({
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Check if the JWT secret is defined
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not defined');
    }

    // Generate API key with expiration time
    const apiKey = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET as Secret, { expiresIn: '24h' });

    return res.status(201).json({ message: 'Signup successful', apiKey });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

export { signup };
