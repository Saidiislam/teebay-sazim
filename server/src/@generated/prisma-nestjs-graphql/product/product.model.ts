import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Category } from '../prisma/category.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [Category], {nullable:true})
    categories!: Array<keyof typeof Category>;

    @Field(() => Int, {nullable:true})
    sellerId!: number | null;

    @Field(() => User, {nullable:true})
    seller?: User | null;
}
