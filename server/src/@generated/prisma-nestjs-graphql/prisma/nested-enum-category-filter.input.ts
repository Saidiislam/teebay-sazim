import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Category } from './category.enum';

@InputType()
export class NestedEnumCategoryFilter {

    @Field(() => Category, {nullable:true})
    equals?: keyof typeof Category;

    @Field(() => [Category], {nullable:true})
    in?: Array<keyof typeof Category>;

    @Field(() => [Category], {nullable:true})
    notIn?: Array<keyof typeof Category>;

    @Field(() => NestedEnumCategoryFilter, {nullable:true})
    not?: NestedEnumCategoryFilter;
}
