import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductsInput } from './user-create-without-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductsInput } from './user-create-or-connect-without-products.input';
import { UserCreateManyProductsInputEnvelope } from './user-create-many-products-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutProductsInput {

    @Field(() => [UserCreateWithoutProductsInput], {nullable:true})
    @Type(() => UserCreateWithoutProductsInput)
    create?: Array<UserCreateWithoutProductsInput>;

    @Field(() => [UserCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutProductsInput>;

    @Field(() => UserCreateManyProductsInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyProductsInputEnvelope)
    createMany?: UserCreateManyProductsInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
