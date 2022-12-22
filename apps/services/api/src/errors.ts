import { Response } from 'express';

/**
 * Error class for 404 errors
 * @extends Error
 * @param {string} message - Un-found property
 */
export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

/**
 * Error class for 401 errors
 * @extends Error
 * @param {string} message
 */
export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedException';
  }
}

export const ExpressErrorResponseHandler = (res: Response, error: unknown) => {
  console.error(error);

  if (error instanceof NotFoundError) {
    res.status(404).json({
      message: error.message,
    });
    return;
  }

  if (error instanceof UnauthorizedException) {
    res.status(401).json({
      message: error.message,
    });
    return;
  }

  res.status(500).json({
    message: 'Internal server error',
  });
};
