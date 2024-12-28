import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema({ timestamps: true })
export class Job {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  salary: string;

  @Prop({ 
    required: true,
    enum: ['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP']
  })
  type: string;

  @Prop({ required: true })
  createdBy: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);