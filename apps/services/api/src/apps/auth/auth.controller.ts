import { zLogin, zToken, ZValidate } from '@hospe/types';
import { Router } from 'express';

import { Login, TokenRefresh } from './auth.service';
import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from './helpers/tokens';

import { ExpressErrorResponseHandler } from '../../errors';

export const router = Router();

router.post('/login', ZValidate(zLogin), async (req, res) => {
  try {
    const data = await Login(req.body);

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

router.post('/token', ZValidate(zToken), async (req, res) => {
  try {
    const data = await TokenRefresh(req.body.refreshToken);
    res.json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
