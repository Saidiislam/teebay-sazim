import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyUserInput } from './product-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyUserInputEnvelope {

    @Field(() => [ProductCreateManyUserInput], {nullable:false})
    @Type(() => ProductCreateManyUserInput)
    data!: Array<ProductCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
