import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutUserInput } from './product-create-without-user.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutUserInput } from './product-create-or-connect-without-user.input';
import { ProductUpsertWithWhereUniqueWithoutUserInput } from './product-upsert-with-where-unique-without-user.input';
import { ProductCreateManyUserInputEnvelope } from './product-create-many-user-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutUserInput } from './product-update-with-where-unique-without-user.input';
import { ProductUpdateManyWithWhereWithoutUserInput } from './product-update-many-with-where-without-user.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ProductCreateWithoutUserInput], {nullable:true})
    @Type(() => ProductCreateWithoutUserInput)
    create?: Array<ProductCreateWithoutUserInput>;

    @Field(() => [ProductCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutUserInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ProductCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyUserInputEnvelope)
    createMany?: ProductCreateManyUserInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
