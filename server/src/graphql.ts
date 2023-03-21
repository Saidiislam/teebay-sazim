
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Category {
    ELECTRONICS = "ELECTRONICS",
    FURNITURE = "FURNITURE",
    HOME_APPLIANCES = "HOME_APPLIANCES",
    SPORTING_GOODS = "SPORTING_GOODS",
    OUTDOOR = "OUTDOOR",
    TOYS = "TOYS"
}

export class CreateProductInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    price: number;
    title: string;
    description: string;
    categories: Category[];
}

export class UpdateProductInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    price: number;
    title: string;
    description: string;
    categories: Category[];
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class Product {
    id: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    price: number;
    title: string;
    description: string;
    categories: Category[];
}

export abstract class IQuery {
    abstract products(orderBy?: Nullable<OrderByParams>): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(id: number, input: CreateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
