import { Field, InputType, ID, HideField } from '@nestjs/graphql';

@InputType()
export class CreateIntroInput {
  @Field(() => String)
  userName: string;

  @Field(() => Date)
  postDate: Date;

 

  @Field(() => String)
  caption: string;


  @Field(() => String)
  video: {};
}
