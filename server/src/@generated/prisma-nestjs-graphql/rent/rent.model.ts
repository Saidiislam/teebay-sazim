import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Rent {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Int, {nullable:true})
    productId!: number | null;

    @Field(() => Date, {nullable:false})
    startData!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
