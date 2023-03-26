import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    status = "status",
    userId = "userId",
    price = "price",
    rentPrice = "rentPrice",
    rentFrom = "rentFrom",
    rentTo = "rentTo",
    title = "title",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    categories = "categories"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
