import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Category } from './category.enum';

@InputType()
export class EnumCategoryNullableListFilter {

    @Field(() => [Category], {nullable:true})
    equals?: Array<keyof typeof Category>;

    @Field(() => Category, {nullable:true})
    has?: keyof typeof Category;

    @Field(() => [Category], {nullable:true})
    hasEvery?: Array<keyof typeof Category>;

    @Field(() => [Category], {nullable:true})
    hasSome?: Array<keyof typeof Category>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
