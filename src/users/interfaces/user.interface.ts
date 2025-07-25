import { Document } from 'mongoose';

export interface User extends Document {
  id?: string;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}