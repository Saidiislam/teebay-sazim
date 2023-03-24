import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from './status.enum';
import { NestedEnumStatusWithAggregatesFilter } from './nested-enum-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumStatusFilter } from './nested-enum-status-filter.input';

@InputType()
export class EnumStatusWithAggregatesFilter {

    @Field(() => Status, {nullable:true})
    equals?: keyof typeof Status;

    @Field(() => [Status], {nullable:true})
    in?: Array<keyof typeof Status>;

    @Field(() => [Status], {nullable:true})
    notIn?: Array<keyof typeof Status>;

    @Field(() => NestedEnumStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumStatusFilter, {nullable:true})
    _min?: NestedEnumStatusFilter;

    @Field(() => NestedEnumStatusFilter, {nullable:true})
    _max?: NestedEnumStatusFilter;
}
