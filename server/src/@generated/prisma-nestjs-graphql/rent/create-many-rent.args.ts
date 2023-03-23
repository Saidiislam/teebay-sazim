import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RentCreateManyInput } from './rent-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRentArgs {

    @Field(() => [RentCreateManyInput], {nullable:false})
    @Type(() => RentCreateManyInput)
    data!: Array<RentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
