import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';

@ObjectType()
export class ProductMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    rentPrice?: number;

    @Field(() => Date, {nullable:true})
    rentFrom?: Date | string;

    @Field(() => Date, {nullable:true})
    rentTo?: Date | string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
