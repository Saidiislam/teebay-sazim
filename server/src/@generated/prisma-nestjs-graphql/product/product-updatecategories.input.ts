import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Category } from '../prisma/category.enum';

@InputType()
export class ProductUpdatecategoriesInput {

    @Field(() => [Category], {nullable:true})
    set?: Array<keyof typeof Category>;

    @Field(() => [Category], {nullable:true})
    push?: Array<keyof typeof Category>;
}
