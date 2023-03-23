import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RentWhereInput {

    @Field(() => [RentWhereInput], {nullable:true})
    AND?: Array<RentWhereInput>;

    @Field(() => [RentWhereInput], {nullable:true})
    OR?: Array<RentWhereInput>;

    @Field(() => [RentWhereInput], {nullable:true})
    NOT?: Array<RentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    productId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startData?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
