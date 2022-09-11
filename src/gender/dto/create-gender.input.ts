import { Field, InputType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';

@InputType()
export class CreateGenderInput {
  @Field()
  gender: string;

  @Field()
  lookingForGender: string

  
}
