
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProductInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    price: number;
    title: string;
    description: string;
}

export class UpdateProductInput {
    id?: Nullable<Product>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    price: number;
    title: string;
    description: string;
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
}

export abstract class IQuery {
    abstract products(orderBy?: Nullable<OrderByParams>): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
