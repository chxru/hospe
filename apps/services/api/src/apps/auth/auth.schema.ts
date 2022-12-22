import { Schema } from 'mongoose';

export const AuthSchema = new Schema({
  userId: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

export const RefreshTokenSchema = new Schema({
  _id: { type: String, required: true },
  expiredAt: { type: Date, required: true },
  role: { type: String, required: true },
  userId: { type: String, required: true },
});
