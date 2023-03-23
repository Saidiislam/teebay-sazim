import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateroleInput } from './user-createrole.input';
import { ProductCreateNestedManyWithoutSellerInput } from '../product/product-create-nested-many-without-seller.input';

@InputType()
export class UserCreateInput {

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

    @Field(() => ProductCreateNestedManyWithoutSellerInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutSellerInput;
}
