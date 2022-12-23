import { Schema } from 'mongoose';

export const BookingSchema = new Schema({
  bookingId: { type: String, required: true, index: true },
  docID: { type: String, required: true, index: true },
  docName: { type: String, required: true },
  bookingDate: { type: String, required: true, index: -1 },
  bookingTime: { type: String, required: true, index: -1 },
  bookingFee: { type: Number, required: true },
});
