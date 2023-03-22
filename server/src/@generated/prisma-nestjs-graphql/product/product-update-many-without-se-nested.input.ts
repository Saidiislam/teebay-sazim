import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSeInput } from './product-create-without-se.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSeInput } from './product-create-or-connect-without-se.input';
import { ProductUpsertWithWhereUniqueWithoutSeInput } from './product-upsert-with-where-unique-without-se.input';
import { ProductCreateManySeInputEnvelope } from './product-create-many-se-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutSeInput } from './product-update-with-where-unique-without-se.input';
import { ProductUpdateManyWithWhereWithoutSeInput } from './product-update-many-with-where-without-se.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutSeNestedInput {

    @Field(() => [ProductCreateWithoutSeInput], {nullable:true})
    @Type(() => ProductCreateWithoutSeInput)
    create?: Array<ProductCreateWithoutSeInput>;

    @Field(() => [ProductCreateOrConnectWithoutSeInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSeInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutSeInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutSeInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutSeInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutSeInput>;

    @Field(() => ProductCreateManySeInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManySeInputEnvelope)
    createMany?: ProductCreateManySeInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutSeInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutSeInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutSeInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutSeInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutSeInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutSeInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
