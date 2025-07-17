import { Schema } from 'mongoose';

export const DeedSchema = new Schema({
  title: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});
