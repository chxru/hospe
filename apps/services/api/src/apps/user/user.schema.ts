import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true },
});
