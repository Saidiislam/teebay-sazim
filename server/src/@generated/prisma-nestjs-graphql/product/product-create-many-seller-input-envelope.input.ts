import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManySellerInput } from './product-create-many-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManySellerInputEnvelope {

    @Field(() => [ProductCreateManySellerInput], {nullable:false})
    @Type(() => ProductCreateManySellerInput)
    data!: Array<ProductCreateManySellerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
