import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    price = "price",
    title = "title",
    description = "description",
    categories = "categories"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
