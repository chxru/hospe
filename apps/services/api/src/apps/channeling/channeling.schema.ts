import { Schema } from 'mongoose';

export const ChannelingSchema = new Schema({
  date: { type: String, required: true, index: -1, default: Date.now },
  time: { type: String, required: true, index: -1 },
  maximumPatients: { type: Number, required: true },
  doctorFee: { type: Number, required: true },
});
