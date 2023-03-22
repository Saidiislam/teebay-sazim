import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutUserInput } from './product-update-without-user.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutUserInput } from './product-create-without-user.input';

@InputType()
export class ProductUpsertWithoutUserInput {

    @Field(() => ProductUpdateWithoutUserInput, {nullable:false})
    @Type(() => ProductUpdateWithoutUserInput)
    update!: ProductUpdateWithoutUserInput;

    @Field(() => ProductCreateWithoutUserInput, {nullable:false})
    @Type(() => ProductCreateWithoutUserInput)
    create!: ProductCreateWithoutUserInput;
}
