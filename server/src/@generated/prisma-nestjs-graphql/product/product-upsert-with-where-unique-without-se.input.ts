import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSeInput } from './product-update-without-se.input';
import { ProductCreateWithoutSeInput } from './product-create-without-se.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutSeInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutSeInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSeInput)
    update!: ProductUpdateWithoutSeInput;

    @Field(() => ProductCreateWithoutSeInput, {nullable:false})
    @Type(() => ProductCreateWithoutSeInput)
    create!: ProductCreateWithoutSeInput;
}
