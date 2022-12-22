import { ValidateAccessToken } from './helpers/tokens';

export const AuthMiddleware = (public_endpoints: string[]) => {
  return async (req, res, next) => {
    const { url } = req;
    const isPublic = public_endpoints.includes(url);

    if (isPublic) {
      next();
      return;
    }

    const { authorization } = req.headers;
    const token = authorization?.split(' ')[1];
    const payload = await ValidateAccessToken(token);

    if (!payload) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    next();
  };
};

// TODO: Implement role based access control
