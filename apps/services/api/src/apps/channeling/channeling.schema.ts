import { model, Schema } from 'mongoose';

const ChannelingSchema = new Schema({
  docId: { type: String, required: true },
  docType: { type: String, required: true },
  date: { type: Date, required: true, index: -1, default: Date.now },
  time: { type: String, required: true, index: -1 },
  maxPatient: { type: Number, required: true },
  fee: { type: Number, required: true },
  docName: { type: String, required: true },
  status: { type: String, required: true, default: 'open' },
});

export const ChannelingModel = model('Channeling', ChannelingSchema);
