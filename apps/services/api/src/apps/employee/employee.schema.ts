import { model, Schema } from 'mongoose';

const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  birthday: { type: Date },
  specialization: { type: String, required: true },
  qualification: { type: String, required: true },
});

export const EmployeeModel = model('Employee', EmployeeSchema);
