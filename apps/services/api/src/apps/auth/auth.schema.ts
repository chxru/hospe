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

const MagicLinkSchema = new Schema({
  email: { type: String, required: true, index: true },
  token: { type: String, required: true, index: true, unique: true },
  expiresAt: { type: Date, required: true },
  isUsed: { type: Boolean, required: true, default: false },
  userId: { type: String, required: true },
});

export const MagicLinkModel = model('MagicLink', MagicLinkSchema);
