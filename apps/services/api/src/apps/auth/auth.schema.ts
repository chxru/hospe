import { model, Schema } from 'mongoose';

const AuthSchema = new Schema({
  userId: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

export const AuthModel = model('Auth', AuthSchema);

const RefreshTokenSchema = new Schema({
  _id: { type: String, required: true },
  expiredAt: { type: Date, required: true },
  role: { type: String, required: true },
  userId: { type: String, required: true },
});

export const RefreshTokenModel = model('RefreshToken', RefreshTokenSchema);
