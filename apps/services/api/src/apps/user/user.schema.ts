import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true, index: true },
});

export const UserModel = model('User', UserSchema);
