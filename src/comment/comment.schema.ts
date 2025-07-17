import { Schema } from 'mongoose';

export const CommentSchema = new Schema({
  text: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  deed: { type: Schema.Types.ObjectId, ref: 'Deed', required: true },
  createdAt: { type: Date, default: Date.now },
});
