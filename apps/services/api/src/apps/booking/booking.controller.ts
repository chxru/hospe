import { Router } from 'express';
import { ExpressErrorResponseHandler } from '../../errors';
import {
  ConfirmBooking,
  CreateBooking,
  DeleteBooking,
  FindOneBooking,
} from './booking.service';

import { GetUser } from '../user/user.service';

export const router = Router();

/* create booking session */
router.post('/create-booking', async (req, res) => {
  try {
    const userData = await GetUser(req.user.id);
    const data = await CreateBooking(
      req.user.id,
      userData.displayName,
      req.body
    );
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

/* find booking by id */
router.get(':id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await FindOneBooking(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

/* delete booking session by id */
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await DeleteBooking(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.post('/confirm', async (req, res) => {
  try {
    const data = await ConfirmBooking(req.user.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
