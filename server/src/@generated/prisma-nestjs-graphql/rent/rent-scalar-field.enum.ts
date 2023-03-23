import { registerEnumType } from '@nestjs/graphql';

export enum RentScalarFieldEnum {
    id = "id",
    userId = "userId",
    productId = "productId",
    startData = "startData",
    endDate = "endDate",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RentScalarFieldEnum, { name: 'RentScalarFieldEnum', description: undefined })
