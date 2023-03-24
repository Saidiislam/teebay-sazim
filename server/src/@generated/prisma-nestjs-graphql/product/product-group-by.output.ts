import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { Category } from '../prisma/category.enum';
import { ProductCountAggregate } from './product-count-aggregate.output';
import { ProductAvgAggregate } from './product-avg-aggregate.output';
import { ProductSumAggregate } from './product-sum-aggregate.output';
import { ProductMinAggregate } from './product-min-aggregate.output';
import { ProductMaxAggregate } from './product-max-aggregate.output';

@ObjectType()
export class ProductGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => [Category], {nullable:true})
    categories?: Array<keyof typeof Category>;

    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: ProductCountAggregate;

    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: ProductAvgAggregate;

    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: ProductSumAggregate;

    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: ProductMinAggregate;

    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: ProductMaxAggregate;
}
