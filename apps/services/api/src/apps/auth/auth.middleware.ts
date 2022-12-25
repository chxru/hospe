import { Request, Response, NextFunction } from 'express';
import { ValidateAccessToken } from './helpers/tokens';

export const AuthMiddleware = (public_endpoints: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { url } = req;
    const isPublic = public_endpoints.includes(url);

    if (isPublic) {
      next();
      return;
    }

    const { authorization } = req.headers;
    const token = authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const payload = await ValidateAccessToken(token);

    if (!payload) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    req.user = payload;

    next();
  };
};

// TODO: Implement role based access control
