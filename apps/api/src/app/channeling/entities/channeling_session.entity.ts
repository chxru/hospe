import { Schema } from 'mongoose';

export const ChannelingSessionEntity = new Schema({
  channelingSessionId: String,
  channelingDoctorId: String,
  channelingDoctorName: String,
  channelingDate: Date,
  channelingStartTime: String,
  channelingEndTime: String,
  maximiumPatient: Number,
});
