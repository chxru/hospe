import {
  zCreateBooking,
  zDeleteBooking,
  zFindOneBooking,
  ZValidate,
} from '@hospe/types';
import { Router } from 'express';
import { ExpressErrorResponseHandler } from '../../errors';
import {
  ConfirmBooking,
  CreateBooking,
  DeleteBooking,
  FindOneBooking,
} from './booking.service';

export const router = Router();

/* create booking session */
router.post('/create-booking', ZValidate(zCreateBooking), async (req, res) => {
  try {
    const data = await CreateBooking(req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

/* find booking by id */
router.get(':id', ZValidate(zFindOneBooking), async (req, res) => {
  try {
    const id = req.params.id;
    const data = await FindOneBooking(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

/* delete booking session by id */
router.delete('/:id', ZValidate(zDeleteBooking), async (req, res) => {
  try {
    const id = req.params.id;
    const data = await DeleteBooking(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

// TODO: this endpoint made at the last moment to showcase the emailing feature, remove later
router.post('/confirm', async (req, res) => {
  try {
    const data = await ConfirmBooking(req.user.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
