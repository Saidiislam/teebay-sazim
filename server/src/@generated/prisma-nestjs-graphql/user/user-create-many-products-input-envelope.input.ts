import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyProductsInput } from './user-create-many-products.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyProductsInputEnvelope {

    @Field(() => [UserCreateManyProductsInput], {nullable:false})
    @Type(() => UserCreateManyProductsInput)
    data!: Array<UserCreateManyProductsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
