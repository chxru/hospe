import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class RefreshToken {
  @Prop()
  _id: string;

  @Prop({ required: true })
  expiredAt: Date;

  @Prop({ required: true })
  roles: string[];
}

export type RefreshTokenDocument = RefreshToken & Document;
export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
