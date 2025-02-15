import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({ unique: true })
    username: string;

    @Prop({ required: false })
    email?: string;
}

export const userSchema = SchemaFactory.createForClass(User);