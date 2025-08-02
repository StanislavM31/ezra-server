import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeedDocument = Deed & Document;

// MongoDB Deed schema
@Schema({ timestamps: true })
export class Deed {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  owner: string;
}

export const DeedSchema = SchemaFactory.createForClass(Deed);
