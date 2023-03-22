import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSellerInput } from './product-create-without-seller.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSellerInput } from './product-create-or-connect-without-seller.input';
import { ProductCreateManySellerInputEnvelope } from './product-create-many-seller-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutSellerInput {

    @Field(() => [ProductCreateWithoutSellerInput], {nullable:true})
    @Type(() => ProductCreateWithoutSellerInput)
    create?: Array<ProductCreateWithoutSellerInput>;

    @Field(() => [ProductCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutSellerInput>;

    @Field(() => ProductCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManySellerInputEnvelope)
    createMany?: ProductCreateManySellerInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}
