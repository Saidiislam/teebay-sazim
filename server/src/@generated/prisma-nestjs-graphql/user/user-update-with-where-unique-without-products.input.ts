import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProductsInput } from './user-update-without-products.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProductsInput)
    data!: UserUpdateWithoutProductsInput;
}
