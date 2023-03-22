import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductsInput } from './user-create-without-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductsInput } from './user-create-or-connect-without-products.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProductsInput {

    @Field(() => UserCreateWithoutProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutProductsInput)
    create?: UserCreateWithoutProductsInput;

    @Field(() => UserCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
