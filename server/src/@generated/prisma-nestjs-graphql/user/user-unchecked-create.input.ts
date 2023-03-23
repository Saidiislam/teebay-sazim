import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateroleInput } from './user-createrole.input';
import { ProductUncheckedCreateNestedManyWithoutUserInput } from '../product/product-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => UserCreateroleInput, {nullable:true})
    role?: UserCreateroleInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutUserInput;
}