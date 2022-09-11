import { CreateGenderInput } from './create-gender.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGenderInput extends PartialType(
  CreateGenderInput,
) {
  @Field(() => Int)
  gender: string;

  @Field()
  lookingForGender?: string;
}
