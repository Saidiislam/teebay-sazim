import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    status = "status",
    userId = "userId",
    price = "price",
    title = "title",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    categories = "categories"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
