import { useQuery, gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products($getOnly: FilterByParams) {
    products(filter: $getOnly) {
      id
      status
      userId
      price
      title
      description
      createdAt
      updatedAt
      categories
    }
  }
`;
