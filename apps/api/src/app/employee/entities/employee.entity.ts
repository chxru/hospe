import { Schema } from 'mongoose';

export const EmployeeEntity = new Schema({
  name: String,
  email: String,
  phone: Number,
  gender: String,
  age: Number,
  birthday: Date,
  specilaization: String,
  qulification: String,
});
