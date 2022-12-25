import type { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

/**
 * Validate request body, query and params
 *
 * @param schema z schema
 * @returns
 */
export const ZValidate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        const err = fromZodError(error);
        return res.status(400).json({
          message: err,
        });
      }

      return res.status(400).json({
        message: 'Invalid request',
      });
    }
  };
