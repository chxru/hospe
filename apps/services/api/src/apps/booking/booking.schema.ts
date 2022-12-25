import { Schema, model } from 'mongoose';

const BookingSchema = new Schema({
  userID: { type: String, required: true, index: true },
  userName: { type: String, required: true },
  sessionId: { type: String, required: true, index: true },
});

export const BookingModel = model('Booking', BookingSchema);
