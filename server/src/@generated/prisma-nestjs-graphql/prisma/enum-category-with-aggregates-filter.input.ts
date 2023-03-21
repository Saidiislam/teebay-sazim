import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Category } from './category.enum';
import { NestedEnumCategoryWithAggregatesFilter } from './nested-enum-category-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCategoryFilter } from './nested-enum-category-filter.input';

@InputType()
export class EnumCategoryWithAggregatesFilter {

    @Field(() => Category, {nullable:true})
    equals?: keyof typeof Category;

    @Field(() => [Category], {nullable:true})
    in?: Array<keyof typeof Category>;

    @Field(() => [Category], {nullable:true})
    notIn?: Array<keyof typeof Category>;

    @Field(() => NestedEnumCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCategoryFilter, {nullable:true})
    _min?: NestedEnumCategoryFilter;

    @Field(() => NestedEnumCategoryFilter, {nullable:true})
    _max?: NestedEnumCategoryFilter;
}
