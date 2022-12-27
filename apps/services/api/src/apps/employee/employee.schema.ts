import { model, Schema } from 'mongoose';

const EmployeeSchema = new Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  specialization: { type: String, required: true },
  qualification: { type: String, required: true },
});

export const EmployeeModel = model('Employee', EmployeeSchema);
