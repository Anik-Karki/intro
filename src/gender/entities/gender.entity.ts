import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
@ObjectType()
export class Gender extends mongoose.Document {
  @Prop({ type: String })
  id: mongoose.Types.ObjectId;

  @Field()
  @Prop()
  gender: string;

  @Prop()
  lookingForGender: String

 
}

export const GenderSchema = SchemaFactory.createForClass(Gender);
