import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RentWhereInput } from './rent-where.input';
import { Type } from 'class-transformer';
import { RentOrderByWithRelationInput } from './rent-order-by-with-relation.input';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RentScalarFieldEnum } from './rent-scalar-field.enum';

@ArgsType()
export class FindManyRentArgs {

    @Field(() => RentWhereInput, {nullable:true})
    @Type(() => RentWhereInput)
    where?: RentWhereInput;

    @Field(() => [RentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RentOrderByWithRelationInput>;

    @Field(() => RentWhereUniqueInput, {nullable:true})
    cursor?: RentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RentScalarFieldEnum>;
}
