import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { Int } from '@nestjs/graphql';
import { Category } from '../prisma/category.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Status, {nullable:false,defaultValue:'UNSOLD'})
    status!: keyof typeof Status;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    rentPrice!: number;

    @Field(() => Date, {nullable:true})
    rentFrom!: Date | null;

    @Field(() => Date, {nullable:true})
    rentTo!: Date | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Category], {nullable:true})
    categories!: Array<keyof typeof Category>;

    @Field(() => User, {nullable:true})
    User?: User | null;
}
