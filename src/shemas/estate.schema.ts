import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EstateDocument = HydratedDocument<Estate>;

@Schema({
  timestamps: true,
})
export class Estate {
  @Prop({ trim: true, required: true })
  name: string;
  @Prop({ trim: true, required: true })
  email: string;
  @Prop({ trim: true, required: true })
  address: string;
  @Prop({ trim: true, required: true })
  floor: string;
  @Prop({ trim: true, required: true })
  additional: string;
}

export const EstateSchema = SchemaFactory.createForClass(Estate);