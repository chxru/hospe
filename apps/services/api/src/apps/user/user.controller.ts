import { zCreateUser, ZValidate } from '@hospe/types';
import { Router } from 'express';

import { ExpressErrorResponseHandler } from '../../errors';
import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from '../auth/helpers/tokens';
import { CreateUser, GetUser } from './user.service';

export const router = Router();

router.post('/create', ZValidate(zCreateUser), async (req, res) => {
  try {
    const data = await CreateUser(req.body);

    res.json({
      displayName: data.displayName,
      email: data.email,
      id: data.id,
      tokens: {
        access: {
          expires: ACCESS_TOKEN_EXPIRATION,
          value: data.accessToken,
        },
        refresh: {
          expires: REFRESH_TOKEN_EXPIRATION,
          value: data.refreshToken,
        },
      },
    });
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await GetUser(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
