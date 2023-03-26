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

export const REMOVE_PRODUCT = gql`
  mutation Mutation($removeProductId: Int!) {
    removeProduct(id: $removeProductId) {
      id
    }
  }
`;
