import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RentCountAggregate } from './rent-count-aggregate.output';
import { RentAvgAggregate } from './rent-avg-aggregate.output';
import { RentSumAggregate } from './rent-sum-aggregate.output';
import { RentMinAggregate } from './rent-min-aggregate.output';
import { RentMaxAggregate } from './rent-max-aggregate.output';

@ObjectType()
export class AggregateRent {

    @Field(() => RentCountAggregate, {nullable:true})
    _count?: RentCountAggregate;

    @Field(() => RentAvgAggregate, {nullable:true})
    _avg?: RentAvgAggregate;

    @Field(() => RentSumAggregate, {nullable:true})
    _sum?: RentSumAggregate;

    @Field(() => RentMinAggregate, {nullable:true})
    _min?: RentMinAggregate;

    @Field(() => RentMaxAggregate, {nullable:true})
    _max?: RentMaxAggregate;
}
