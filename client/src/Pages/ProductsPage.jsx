import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../Api/Public.jsx";
import { Box, Button, HStack, IconButton, Radio, Wrap } from "@chakra-ui/react";
import { TopBar } from "./Misc/TopBar.jsx";
import { PageHeadWSort } from "../Components/PageHeadWSort.jsx";
import { ErrorPage } from "./Misc/ErrorPage.jsx";
import { ProductCard } from "../Components/Cards/ProductCard.jsx";

export const ProductsPage = () => {
  const [field, setOrderByField] = useState("price");
  const [value, setValue] = useState(undefined);

  // Query to fetch products
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      orderBy: {
        field,
        direction: "desc",
      },
      filter: {
        filterBy: "categories",
        filterValue: value,
      },
    },
    pollInterval: 500,
  });
  console.log(data);
  return (
    <>
      <Box w={"100%"}>
        {/* Navbar? with profile button */}
        <TopBar />

        {/* Page Heading with sort */}
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

        {/* Hard-Coded version of category filter buttons */}
        <HStack gap={2} mb={4}>
          <Wrap spacing="3px" justify="center">
            <Button
              colorScheme="teal"
              size="sm"
              variant="ghost"
              onClick={() => setValue(undefined)}
            >
              ALL
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              variant="ghost"
              onClick={() => setValue("ELECTRONICS")}
            >
              ELECTRONICS
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              variant="ghost"
              onClick={() => setValue("FURNITURE")}
            >
              FURNITURE
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              variant="ghost"
              onClick={() => setValue("HOME_APPLIANCES")}
            >
              HOME_APPLIANCES
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              variant="ghost"
              onClick={() => setValue("SPORTING_GOODS")}
            >
              SPORTING_GOODS
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              variant="ghost"
              onClick={() => setValue("OUTDOOR")}
            >
              OUTDOOR
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              variant="ghost"
              onClick={() => setValue("TOYS")}
            >
              TOYS
            </Button>
          </Wrap>
        </HStack>

        {/* Going through differnt stages to map the product data */}
        {error ? (
          <ErrorPage message={error.message} />
        ) : loading || data.products.length === 0 ? (
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
              switchTo={`/product/${item.id}`}
            />
          ))
        )}
      </Box>
    </>
  );
};
