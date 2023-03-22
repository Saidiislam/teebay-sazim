import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductsInput } from './user-create-without-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductsInput } from './user-create-or-connect-without-products.input';
import { UserUpsertWithWhereUniqueWithoutProductsInput } from './user-upsert-with-where-unique-without-products.input';
import { UserCreateManyProductsInputEnvelope } from './user-create-many-products-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutProductsInput } from './user-update-with-where-unique-without-products.input';
import { UserUpdateManyWithWhereWithoutProductsInput } from './user-update-many-with-where-without-products.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutProductsNestedInput {

    @Field(() => [UserCreateWithoutProductsInput], {nullable:true})
    @Type(() => UserCreateWithoutProductsInput)
    create?: Array<UserCreateWithoutProductsInput>;

    @Field(() => [UserCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutProductsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => UserCreateManyProductsInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyProductsInputEnvelope)
    createMany?: UserCreateManyProductsInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
