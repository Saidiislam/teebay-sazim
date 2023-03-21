import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Category } from '../prisma/category.enum';

@InputType()
export class ProductCreatecategoriesInput {

    @Field(() => [Category], {nullable:false})
    set!: Array<keyof typeof Category>;
}
