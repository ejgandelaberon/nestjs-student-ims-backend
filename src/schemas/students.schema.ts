import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  course: string;

  @Prop({ required: true })
  yearLevel: string;

  @Prop()
  is_enrolled?: boolean;

  @Prop()
  is_fullyPaid?: boolean;

  @Prop({ required: true })
  createdAt?: Date;

  @Prop()
  modifiedAt?: Date;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
