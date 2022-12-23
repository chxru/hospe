import { Schema } from 'mongoose';

export const ChannelingSchema = new Schema({
  docId: { type: String, required: true },
  docName: { type: String, required: true },
  date: { type: Date, required: true, index: -1, default: Date.now },
  time: { type: String, required: true, index: -1 },
  maximumPatients: { type: Number, required: true },
  doctorFee: { type: Number, required: true },
});
