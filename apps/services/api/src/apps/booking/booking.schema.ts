import { model, Schema } from 'mongoose';

const BookingSchema = new Schema({
  channelingId: { type: String, required: true, index: true },
  docId: { type: String, required: true, index: true },
  docName: { type: String, required: true },
  bookingDate: { type: String, required: true, index: -1 },
  bookingTime: { type: String, required: true, index: -1 },
  bookingFee: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  userId: { type: String, required: true, index: true },
});

export const BookingModel = model('Booking', BookingSchema);

const SpecializationSchema = new Schema({
  label: { type: String, required: true },
  value: { type: String, required: true, unique: true },
});

export const SpecializationModel = model(
  'Specialization',
  SpecializationSchema
);
