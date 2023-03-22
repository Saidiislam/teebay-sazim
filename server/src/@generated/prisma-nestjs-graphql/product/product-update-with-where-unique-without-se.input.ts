import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSeInput } from './product-update-without-se.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutSeInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutSeInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSeInput)
    data!: ProductUpdateWithoutSeInput;
}
