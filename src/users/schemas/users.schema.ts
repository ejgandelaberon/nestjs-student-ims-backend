import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  createdAt?: Date;

  @Prop()
  modifiedAt?: Date;

  @Prop()
  is_active?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
