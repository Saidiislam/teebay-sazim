import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutUserInput } from './product-create-without-user.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutUserInput } from './product-create-or-connect-without-user.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutUserInput {

    @Field(() => ProductCreateWithoutUserInput, {nullable:true})
    @Type(() => ProductCreateWithoutUserInput)
    create?: ProductCreateWithoutUserInput;

    @Field(() => ProductCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutUserInput)
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: ProductWhereUniqueInput;
}
