import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSellerInput } from './product-create-without-seller.input';

@InputType()
export class ProductCreateOrConnectWithoutSellerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutSellerInput, {nullable:false})
    @Type(() => ProductCreateWithoutSellerInput)
    create!: ProductCreateWithoutSellerInput;
}
