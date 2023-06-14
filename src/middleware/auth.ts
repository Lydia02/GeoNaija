import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import User, { IUser } from '../models/authModel';

// Define a custom interface that extends the 'Request' interface
interface AuthenticatedRequest extends Request {
  user?: IUser; // Add the 'user' property to the request object
}

// Middleware function to authenticate requests
async function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    // Get the authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    // Extract the token from the header
    const token = authHeader.split(' ')[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload;

    // Check if the API key is still valid
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      return res.status(401).json({ error: 'API key has expired' });
    }

    // Find the corresponding user in the database
    const user = await User.findOne({ email: decoded.email }).exec();
    if (!user) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    // Attach the user information to the request object
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

export { authenticate };
