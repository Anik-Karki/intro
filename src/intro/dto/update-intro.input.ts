import { CreateIntroInput } from './create-intro.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIntroInput extends PartialType(CreateIntroInput) {
  @Field(() => String)
  _id: String;
}
