import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from './status.enum';

@InputType()
export class NestedEnumStatusFilter {

    @Field(() => Status, {nullable:true})
    equals?: keyof typeof Status;

    @Field(() => [Status], {nullable:true})
    in?: Array<keyof typeof Status>;

    @Field(() => [Status], {nullable:true})
    notIn?: Array<keyof typeof Status>;

    @Field(() => NestedEnumStatusFilter, {nullable:true})
    not?: NestedEnumStatusFilter;
}
