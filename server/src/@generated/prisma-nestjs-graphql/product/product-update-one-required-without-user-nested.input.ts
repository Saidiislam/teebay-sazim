import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutUserInput } from './product-create-without-user.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutUserInput } from './product-create-or-connect-without-user.input';
import { ProductUpsertWithoutUserInput } from './product-upsert-without-user.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutUserInput } from './product-update-without-user.input';

@InputType()
export class ProductUpdateOneRequiredWithoutUserNestedInput {

    @Field(() => ProductCreateWithoutUserInput, {nullable:true})
    @Type(() => ProductCreateWithoutUserInput)
    create?: ProductCreateWithoutUserInput;

    @Field(() => ProductCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutUserInput)
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput;

    @Field(() => ProductUpsertWithoutUserInput, {nullable:true})
    @Type(() => ProductUpsertWithoutUserInput)
    upsert?: ProductUpsertWithoutUserInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutUserInput, {nullable:true})
    @Type(() => ProductUpdateWithoutUserInput)
    update?: ProductUpdateWithoutUserInput;
}
