import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RentCountOrderByAggregateInput } from './rent-count-order-by-aggregate.input';
import { RentAvgOrderByAggregateInput } from './rent-avg-order-by-aggregate.input';
import { RentMaxOrderByAggregateInput } from './rent-max-order-by-aggregate.input';
import { RentMinOrderByAggregateInput } from './rent-min-order-by-aggregate.input';
import { RentSumOrderByAggregateInput } from './rent-sum-order-by-aggregate.input';

@InputType()
export class RentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startData?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RentCountOrderByAggregateInput, {nullable:true})
    _count?: RentCountOrderByAggregateInput;

    @Field(() => RentAvgOrderByAggregateInput, {nullable:true})
    _avg?: RentAvgOrderByAggregateInput;

    @Field(() => RentMaxOrderByAggregateInput, {nullable:true})
    _max?: RentMaxOrderByAggregateInput;

    @Field(() => RentMinOrderByAggregateInput, {nullable:true})
    _min?: RentMinOrderByAggregateInput;

    @Field(() => RentSumOrderByAggregateInput, {nullable:true})
    _sum?: RentSumOrderByAggregateInput;
}
