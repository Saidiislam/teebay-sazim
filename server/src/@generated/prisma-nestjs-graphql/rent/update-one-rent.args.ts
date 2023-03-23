import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RentUpdateInput } from './rent-update.input';
import { Type } from 'class-transformer';
import { RentWhereUniqueInput } from './rent-where-unique.input';

@ArgsType()
export class UpdateOneRentArgs {

    @Field(() => RentUpdateInput, {nullable:false})
    @Type(() => RentUpdateInput)
    data!: RentUpdateInput;

    @Field(() => RentWhereUniqueInput, {nullable:false})
    @Type(() => RentWhereUniqueInput)
    where!: RentWhereUniqueInput;
}
