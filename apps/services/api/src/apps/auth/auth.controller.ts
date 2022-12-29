import { zLogin, zMagic, zToken, ZValidate } from '@hospe/types';
import { Router } from 'express';

import { Login, TokenRefresh, ValidateMagicLink } from './auth.service';

import { ExpressErrorResponseHandler } from '../../errors';

export const router = Router();

router.post('/login', ZValidate(zLogin), async (req, res) => {
  try {
    const data = await Login(req.body);
    res.json(data);
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

router.post('/magic', ZValidate(zMagic), async (req, res) => {
  try {
    const data = await ValidateMagicLink(req.body);
    res.json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
