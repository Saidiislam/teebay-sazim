import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RentUpdateManyMutationInput } from './rent-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RentWhereInput } from './rent-where.input';

@ArgsType()
export class UpdateManyRentArgs {

    @Field(() => RentUpdateManyMutationInput, {nullable:false})
    @Type(() => RentUpdateManyMutationInput)
    data!: RentUpdateManyMutationInput;

    @Field(() => RentWhereInput, {nullable:true})
    @Type(() => RentWhereInput)
    where?: RentWhereInput;
}
