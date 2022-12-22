import { Schema } from 'mongoose';

export const AuthSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
});

export const RefreshTokenSchema = new Schema({
  _id: { type: String, required: true },
  expiredAt: { type: Date, required: true },
  roles: { type: [String], required: true },
  userId: { type: String, required: true },
});
