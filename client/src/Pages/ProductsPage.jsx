import React from "react";
import { GET_PRODUCTS } from "../Api/Public";
import { useQuery, gql } from "@apollo/client";
import { Products } from "../Components/Products";
import { VStack, Box } from "@chakra-ui/react";

export const ProductsPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    pollInterval: 500,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Box w={"100%"}>
          {data.products.map((item) => (
            <Products
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.categories}
              createdAt={item.updatedAt}
            />
          ))}
      </Box>
    </>
  );
};
