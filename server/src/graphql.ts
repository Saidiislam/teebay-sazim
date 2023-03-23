
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
    userId: number;
    price: number;
    isSold: boolean;
    title: string;
    description: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    categories: Category[];
}

export class UpdateProductInput {
    userId?: Nullable<number>;
    price?: Nullable<number>;
    isSold?: Nullable<boolean>;
    title?: Nullable<string>;
    description?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    categories?: Nullable<Category[]>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    address?: Nullable<string>;
    phone?: Nullable<number>;
    email: string;
    role: Role;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class UpdateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<number>;
    email?: Nullable<string>;
    role?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Product {
    id: number;
    userId: number;
    price: number;
    isSold: boolean;
    title: string;
    description: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    categories: Category[];
    User?: Nullable<User>;
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
    firstName: string;
    lastName: string;
    address?: Nullable<string>;
    phone?: Nullable<number>;
    email: string;
    role: Role;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    products?: Nullable<Product[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
