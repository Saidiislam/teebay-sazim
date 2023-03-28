import { useQuery, gql } from "@apollo/client";

// Declaring GraphQl Query Mutations Here

export const GET_PRODUCTS = gql`
  query Products(
    $orderBy: OrderByParams
    $filter: FilterByParams
    $filterNum: FilterByNums
  ) {
    products(orderBy: $orderBy, filter: $filter, filterNum: $filterNum) {
      id
      status
      userId
      price
      rentPrice
      rentFrom
      rentTo
      title
      description
      createdAt
      updatedAt
      categories
    }
  }
`;

export const GET_SINGLE_PRODUCT = gql`
  query ExampleQuery($productId: Int!) {
    product(id: $productId) {
      id
      status
      userId
      price
      rentPrice
      rentFrom
      rentTo
      title
      description
      createdAt
      updatedAt
      categories
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation Mutation($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      status
      userId
      price
      rentPrice
      title
      description
      categories
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $updateProductId: Int!
    $createUpdateInput: UpdateProductInput!
  ) {
    updateProduct(id: $updateProductId, createUpdateInput: $createUpdateInput) {
      price
      userId
      title
      description
      categories
      rentPrice
      status
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation Mutation($removeProductId: Int!) {
    removeProduct(id: $removeProductId) {
      id
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      firstName
      lastName
      address
      phone
      email
      password
      role
      createdAt
      updatedAt
      products {
        id
        status
        userId
        price
        rentPrice
        rentFrom
        rentTo
        title
        description
        createdAt
        updatedAt
        categories
      }
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query User($userId: Int!) {
    user(id: $userId) {
      id
      firstName
      lastName
      address
      phone
      email
      password
      role
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserId: Int!, $updateUserInput: UpdateUserInput!) {
    updateUser(id: $updateUserId, updateUserInput: $updateUserInput) {
      firstName
      id
      lastName
      address
      phone
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($loginUserInput: LoginUserInput!) {
    loginUser(loginUserInput: $loginUserInput) {
      id
      firstName
      lastName
      address
      phone
      email
      role
      createdAt
      updatedAt
      products {
        id
        status
        userId
        price
        rentPrice
        rentFrom
        rentTo
        title
        description
        createdAt
        updatedAt
        categories
      }
    }
  }
`;
