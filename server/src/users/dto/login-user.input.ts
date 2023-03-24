import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserLoginInput {
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
}
