import * as mongoose from 'mongoose';

export const ChannelingEntity = new mongoose.Schema({
  channelingId: String,
  channelingPatientId: String,
  channelingDoctorId: String,
  channelingType: String,
  channelingDate: Date,
  channelingTime: String,
  channelingDescription: String,
  channelingStatus: String,
})
