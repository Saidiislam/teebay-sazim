import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RentCreateInput } from './rent-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRentArgs {

    @Field(() => RentCreateInput, {nullable:false})
    @Type(() => RentCreateInput)
    data!: RentCreateInput;
}
