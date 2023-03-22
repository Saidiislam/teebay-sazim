import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutUserInput } from './product-update-without-user.input';
import { ProductCreateWithoutUserInput } from './product-create-without-user.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutUserInput, {nullable:false})
    @Type(() => ProductUpdateWithoutUserInput)
    update!: ProductUpdateWithoutUserInput;

    @Field(() => ProductCreateWithoutUserInput, {nullable:false})
    @Type(() => ProductCreateWithoutUserInput)
    create!: ProductCreateWithoutUserInput;
}
