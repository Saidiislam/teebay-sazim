import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductsInput } from './user-create-without-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductsInput } from './user-create-or-connect-without-products.input';
import { UserUpsertWithoutProductsInput } from './user-upsert-without-products.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProductsInput } from './user-update-without-products.input';

@InputType()
export class UserUpdateOneWithoutProductsNestedInput {

    @Field(() => UserCreateWithoutProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutProductsInput)
    create?: UserCreateWithoutProductsInput;

    @Field(() => UserCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput;

    @Field(() => UserUpsertWithoutProductsInput, {nullable:true})
    @Type(() => UserUpsertWithoutProductsInput)
    upsert?: UserUpsertWithoutProductsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProductsInput, {nullable:true})
    @Type(() => UserUpdateWithoutProductsInput)
    update?: UserUpdateWithoutProductsInput;
}
