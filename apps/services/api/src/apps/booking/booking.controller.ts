import {
  GetSpecializationDto,
  zCheckAvailability,
  zConfirmBooking,
  zCreateBooking,
  zDeleteBooking,
  zFindOneBooking,
  zSpecialization,
  ZValidate,
} from '@hospe/types';
import { Router } from 'express';
import { ExpressErrorResponseHandler } from '../../errors';
import {
  CheckAvailability,
  ConfirmBooking,
  CreateBooking,
  CreateSpecialization,
  DeleteBooking,
  FindAllSpecializations,
  FindOneBooking,
  GetMyBookings,
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

router.get('/specialization', async (req, res) => {
  try {
    const x = await FindAllSpecializations();
    const data: GetSpecializationDto = { data: x };
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.post('/specialization', ZValidate(zSpecialization), async (req, res) => {
  try {
    const data = await CreateSpecialization(req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.post('/confirm', ZValidate(zConfirmBooking), async (req, res) => {
  try {
    const data = await ConfirmBooking(req.user.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.post('/available', ZValidate(zCheckAvailability), async (req, res) => {
  try {
    const data = await CheckAvailability(req.user.id, req.body.id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.get('/my', async (req, res) => {
  try {
    const data = await GetMyBookings(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.get('/my/previous', async (req, res) => {
  try {
    const data = await GetMyBookings(req.user.id, true);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
