import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from './status.enum';

@InputType()
export class EnumStatusFieldUpdateOperationsInput {

    @Field(() => Status, {nullable:true})
    set?: keyof typeof Status;
}
