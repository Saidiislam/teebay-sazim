import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ProductCreatecategoriesInput } from './product-createcategories.input';
import { UserCreateNestedOneWithoutProductsInput } from '../user/user-create-nested-one-without-products.input';

@InputType()
export class ProductCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    description!: string;

    @Field(() => ProductCreatecategoriesInput, {nullable:true})
    categories?: ProductCreatecategoriesInput;

    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:true})
    User?: UserCreateNestedOneWithoutProductsInput;
}
