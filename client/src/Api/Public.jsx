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
