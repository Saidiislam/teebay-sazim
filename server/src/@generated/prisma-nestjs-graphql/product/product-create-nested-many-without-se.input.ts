import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSeInput } from './product-create-without-se.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSeInput } from './product-create-or-connect-without-se.input';
import { ProductCreateManySeInputEnvelope } from './product-create-many-se-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutSeInput {

    @Field(() => [ProductCreateWithoutSeInput], {nullable:true})
    @Type(() => ProductCreateWithoutSeInput)
    create?: Array<ProductCreateWithoutSeInput>;

    @Field(() => [ProductCreateOrConnectWithoutSeInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSeInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutSeInput>;

    @Field(() => ProductCreateManySeInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManySeInputEnvelope)
    createMany?: ProductCreateManySeInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}
