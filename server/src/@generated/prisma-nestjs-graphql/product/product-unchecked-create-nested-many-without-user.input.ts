import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutUserInput } from './product-create-without-user.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutUserInput } from './product-create-or-connect-without-user.input';
import { ProductCreateManyUserInputEnvelope } from './product-create-many-user-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ProductCreateWithoutUserInput], {nullable:true})
    @Type(() => ProductCreateWithoutUserInput)
    create?: Array<ProductCreateWithoutUserInput>;

    @Field(() => [ProductCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutUserInput>;

    @Field(() => ProductCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyUserInputEnvelope)
    createMany?: ProductCreateManyUserInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}
