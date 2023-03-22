import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProductsInput } from './user-update-without-products.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProductsInput } from './user-create-without-products.input';

@InputType()
export class UserUpsertWithoutProductsInput {

    @Field(() => UserUpdateWithoutProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProductsInput)
    update!: UserUpdateWithoutProductsInput;

    @Field(() => UserCreateWithoutProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutProductsInput)
    create!: UserCreateWithoutProductsInput;
}
