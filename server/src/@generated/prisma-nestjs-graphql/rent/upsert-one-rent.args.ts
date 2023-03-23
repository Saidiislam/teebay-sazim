import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Type } from 'class-transformer';
import { RentCreateInput } from './rent-create.input';
import { RentUpdateInput } from './rent-update.input';

@ArgsType()
export class UpsertOneRentArgs {

    @Field(() => RentWhereUniqueInput, {nullable:false})
    @Type(() => RentWhereUniqueInput)
    where!: RentWhereUniqueInput;

    @Field(() => RentCreateInput, {nullable:false})
    @Type(() => RentCreateInput)
    create!: RentCreateInput;

    @Field(() => RentUpdateInput, {nullable:false})
    @Type(() => RentUpdateInput)
    update!: RentUpdateInput;
}
