import { Field, ObjectType, ID, HideField, InputType } from '@nestjs/graphql';
import { User } from 'src/user/dto/user.dto';

@ObjectType({ isAbstract: true })
export class Fundraiser {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  userName: string;


  @Field(() => Date)
  postDate: Date;

 

  @Field(() => String)
  caption: string;

 

  @Field(() => String)
  video: {};
}
