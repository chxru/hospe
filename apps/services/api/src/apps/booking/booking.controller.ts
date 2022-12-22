import { Router } from "express";
import { ExpressErrorResponseHandler } from "../../errors";
import {
  CreateBooking,
  DeleteBooking,
  FindOneBooking,
} from "./booking.service";

export const router = Router();

/* create booking session */
router.post('/create-booking', async (req, res) => {
  try {
    const data = await CreateBooking(req.body);
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
