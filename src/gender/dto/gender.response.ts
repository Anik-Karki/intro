import { Field, ObjectType, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Gender {
  @Field(() => ID)
  gender: String;

  @Field()
  lookingForGender: String

  
}
