
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

export enum Status {
    UNSOLD = "UNSOLD",
    SOLD = "SOLD",
    LENT = "LENT",
    BROUGHT = "BROUGHT",
    BORROWED = "BORROWED"
}

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export class CreateProductInput {
    status?: Nullable<Status>;
    userId: number;
    price: number;
    rentPrice: number;
    rentFrom?: Nullable<DateTime>;
    rentTo?: Nullable<DateTime>;
    title: string;
    description: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    categories: Category[];
}

export class UpdateProductInput {
    status?: Nullable<Status>;
    userId?: Nullable<number>;
    price?: Nullable<number>;
    rentPrice?: Nullable<number>;
    rentFrom?: Nullable<DateTime>;
    rentTo?: Nullable<DateTime>;
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

export class FilterByParams {
    filterBy?: Nullable<string>;
    filterValue?: Nullable<string>;
}

export class FilterByNums {
    filterNumBy?: Nullable<string>;
    filterNumValue?: Nullable<number>;
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    address?: Nullable<string>;
    phone?: Nullable<number>;
    email: string;
    password: string;
    role?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class LoginUserInput {
    email: string;
    password: string;
}

export class UpdateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<number>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    role?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Product {
    id: number;
    status: Status;
    userId: number;
    price: number;
    rentPrice: number;
    rentFrom?: Nullable<DateTime>;
    rentTo?: Nullable<DateTime>;
    title: string;
    description: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    categories: Category[];
    User?: Nullable<User>;
}

export abstract class IQuery {
    abstract products(orderBy?: Nullable<OrderByParams>, filter?: Nullable<FilterByParams>, filterNum?: Nullable<FilterByNums>): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract users(filter?: Nullable<FilterByParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(id: number, createUpdateInput: UpdateProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: number, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract loginUser(loginUserInput: LoginUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    address?: Nullable<string>;
    phone?: Nullable<number>;
    email: string;
    password: string;
    role?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    products?: Nullable<Product[]>;
}

export class LoggedUserOutput {
    access_token: User;
}

export type DateTime = any;
export type B = any;
type Nullable<T> = T | null;
