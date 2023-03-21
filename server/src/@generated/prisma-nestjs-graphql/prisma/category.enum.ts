import { registerEnumType } from '@nestjs/graphql';

export enum Category {
    ELECTRONICS = "ELECTRONICS",
    FURNITURE = "FURNITURE",
    HOME_APPLIANCES = "HOME_APPLIANCES",
    SPORTING_GOODS = "SPORTING_GOODS",
    OUTDOOR = "OUTDOOR",
    TOYS = "TOYS"
}


registerEnumType(Category, { name: 'Category', description: undefined })
