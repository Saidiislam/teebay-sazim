import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RentWhereInput } from './rent-where.input';
import { Type } from 'class-transformer';
import { RentOrderByWithRelationInput } from './rent-order-by-with-relation.input';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RentCountAggregateInput } from './rent-count-aggregate.input';
import { RentAvgAggregateInput } from './rent-avg-aggregate.input';
import { RentSumAggregateInput } from './rent-sum-aggregate.input';
import { RentMinAggregateInput } from './rent-min-aggregate.input';
import { RentMaxAggregateInput } from './rent-max-aggregate.input';

@ArgsType()
export class RentAggregateArgs {

    @Field(() => RentWhereInput, {nullable:true})
    @Type(() => RentWhereInput)
    where?: RentWhereInput;

    @Field(() => [RentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RentOrderByWithRelationInput>;

    @Field(() => RentWhereUniqueInput, {nullable:true})
    cursor?: RentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RentCountAggregateInput, {nullable:true})
    _count?: RentCountAggregateInput;

    @Field(() => RentAvgAggregateInput, {nullable:true})
    _avg?: RentAvgAggregateInput;

    @Field(() => RentSumAggregateInput, {nullable:true})
    _sum?: RentSumAggregateInput;

    @Field(() => RentMinAggregateInput, {nullable:true})
    _min?: RentMinAggregateInput;

    @Field(() => RentMaxAggregateInput, {nullable:true})
    _max?: RentMaxAggregateInput;
}
