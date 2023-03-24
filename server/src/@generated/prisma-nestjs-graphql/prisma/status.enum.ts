import { registerEnumType } from '@nestjs/graphql';

export enum Status {
    UNSOLD = "UNSOLD",
    SOLD = "SOLD",
    LENT = "LENT",
    BROUGHT = "BROUGHT",
    BORROWED = "BORROWED"
}


registerEnumType(Status, { name: 'Status', description: undefined })
