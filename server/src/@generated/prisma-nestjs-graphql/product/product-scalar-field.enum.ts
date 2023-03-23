import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    userId = "userId",
    price = "price",
    isSold = "isSold",
    title = "title",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    categories = "categories"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
