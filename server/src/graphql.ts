
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

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export class CreateProductInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    price: number;
    title: string;
    description: string;
    categories: Category[];
    userId: number;
}

export class UpdateProductInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    price?: Nullable<number>;
    title?: Nullable<string>;
    description?: Nullable<string>;
    categories?: Nullable<Category[]>;
    userId?: Nullable<number>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class CreateUserInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    username: string;
    email: string;
    role: Role[];
}

export class UpdateUserInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    username?: Nullable<string>;
    email?: Nullable<string>;
    role?: Nullable<Role[]>;
}

export class Product {
    id: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    price: number;
    title: string;
    description: string;
    categories: Category[];
    userId: number;
    User?: Nullable<User[]>;
}

export abstract class IQuery {
    abstract products(orderBy?: Nullable<OrderByParams>): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(id: number, createUpdateInput: UpdateProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: number, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    username: string;
    email: string;
    role: Role[];
    products?: Nullable<Product[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
