import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManySeInput } from './product-create-many-se.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManySeInputEnvelope {

    @Field(() => [ProductCreateManySeInput], {nullable:false})
    @Type(() => ProductCreateManySeInput)
    data!: Array<ProductCreateManySeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
