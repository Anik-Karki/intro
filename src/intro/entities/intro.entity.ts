import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/dto/user.dto';

@Schema()
@ObjectType()
export class Intro extends mongoose.Document {
  @Prop({ type: String })
  id: mongoose.Types.ObjectId;

  @Field()
  @Prop()
  userName: string;


  @Prop()
  postDate: Date;

  @Prop()
  caption: string;


  @Prop({ type: String })
  video: {};

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];
}

export const IntroSchema = SchemaFactory.createForClass(Intro);
