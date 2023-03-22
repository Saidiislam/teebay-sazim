import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSellerInput } from './product-update-without-seller.input';
import { ProductCreateWithoutSellerInput } from './product-create-without-seller.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutSellerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutSellerInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSellerInput)
    update!: ProductUpdateWithoutSellerInput;

    @Field(() => ProductCreateWithoutSellerInput, {nullable:false})
    @Type(() => ProductCreateWithoutSellerInput)
    create!: ProductCreateWithoutSellerInput;
}
