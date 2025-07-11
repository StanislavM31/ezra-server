import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tag: { type: String, required: true, unique: true },
  rating: { type: Number, default: 0 },
});
