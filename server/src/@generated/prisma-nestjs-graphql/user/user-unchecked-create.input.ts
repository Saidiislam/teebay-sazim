import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ProductUncheckedCreateNestedManyWithoutSellerInput } from '../product/product-unchecked-create-nested-many-without-seller.input';

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutSellerInput;
}
