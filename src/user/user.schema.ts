import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});