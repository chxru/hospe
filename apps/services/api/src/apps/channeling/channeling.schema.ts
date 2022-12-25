import { model, Schema } from 'mongoose';

const ChannelingSchema = new Schema({
  docId: { type: String, required: true },
  docType: { type: String, required: true },
  date: { type: Date, required: true, index: -1, default: Date.now },
  time: { type: String, required: true, index: -1 },
  maximumPatients: { type: Number, required: true },
  doctorFee: { type: Number, required: true },
  docName: { type: String, required: true },
  activePatients: { type: Number, required: false, default: 0 },
});

export const ChannelingModel = model('Channeling', ChannelingSchema);
