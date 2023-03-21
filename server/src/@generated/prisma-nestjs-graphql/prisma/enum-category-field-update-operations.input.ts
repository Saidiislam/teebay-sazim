import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Category } from './category.enum';

@InputType()
export class EnumCategoryFieldUpdateOperationsInput {

    @Field(() => Category, {nullable:true})
    set?: keyof typeof Category;
}
