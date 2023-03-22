import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ProductCreatecategoriesInput } from './product-createcategories.input';

@InputType()
export class ProductCreateWithoutSeInput {

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
}
