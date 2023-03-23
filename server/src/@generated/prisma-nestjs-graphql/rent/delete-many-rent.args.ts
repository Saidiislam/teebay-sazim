import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RentWhereInput } from './rent-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRentArgs {

    @Field(() => RentWhereInput, {nullable:true})
    @Type(() => RentWhereInput)
    where?: RentWhereInput;
}
