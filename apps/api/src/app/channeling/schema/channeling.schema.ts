import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Channeling {
  @Prop({ required: true, index: -1 })
  date: Date;

  @Prop({ required: true, index: -1 })
  time: string;

  @Prop({ required: true })
  maximumPatients: number;

  @Prop({ required: true })
  doctorFee: number;
}

export type ChannelingDocument = Channeling & Document;
export const ChannelingSchema = SchemaFactory.createForClass(Channeling);
