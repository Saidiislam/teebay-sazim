import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSeInput } from './product-create-without-se.input';

@InputType()
export class ProductCreateOrConnectWithoutSeInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutSeInput, {nullable:false})
    @Type(() => ProductCreateWithoutSeInput)
    create!: ProductCreateWithoutSeInput;
}
