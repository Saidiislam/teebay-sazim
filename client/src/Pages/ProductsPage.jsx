import React, { useState } from "react";
import { GET_PRODUCTS } from "../Api/Public";
import { useQuery, gql } from "@apollo/client";
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Stack,
  IconButton,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { FaAnkh } from "react-icons/fa";
import { ProductCard } from "../Components/ProductCard";
import { PageHeadWSort } from "../Components/PageHeadWSort";
import { ErrorPage } from "./Misc/ErrorPage";
import { LoadingSkele } from "./Misc/LoadingSkele";
import { TopBar } from "./Misc/TopBar";

export const ProductsPage = () => {
  const [field, setOrderByField] = useState("price");

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      orderBy: {
        field,
        direction: "desc",
      },
    },
    pollInterval: 500,
  });
  console.log(data);
  return (
    <>
      <Box w={"100%"}>
        <TopBar />
        <PageHeadWSort
          title={"All Products"}
          customOnChange={setOrderByField}
          customValue={field}
        >
          <IconButton
            size="sm"
            as={Radio}
            value="createdAt"
            aria-label="Most Recent"
            _checked={{
              bg: "teal.600",
              color: "white",
              borderColor: "teal.600",
            }}
          />
          <IconButton
            size="sm"
            as={Radio}
            value="price"
            aria-label="Most Expensive"
            _checked={{
              bg: "teal.600",
              color: "white",
              borderColor: "teal.600",
            }}
          />
        </PageHeadWSort>
        <hr style={{ marginBottom: "15px" }} />
        {error ? (
          <ErrorPage message={error.message} />
        ) : loading ? (
          <LoadingSkele />
        ) : data.products.length === 0 ? (
          <ErrorPage />
        ) : (
          data.products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.categories}
              createdAt={item.updatedAt}
            />
          ))
        )}
      </Box>
    </>
  );
};
