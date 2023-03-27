import { useQuery, gql } from "@apollo/client";

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
export const  CREATE_PRODUCT = gql`
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
`
export const REMOVE_PRODUCT = gql`
  mutation Mutation($removeProductId: Int!) {
    removeProduct(id: $removeProductId) {
      id
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
`

export const UPDATE_USER = gql`
    mutation UpdateUser($updateUserId: Int!, $updateUserInput: UpdateUserInput!) {
        updateUser(id: $updateUserId, updateUserInput: $updateUserInput) {
            firstName
            id
            lastName
            address
            phone
        }
    }`





