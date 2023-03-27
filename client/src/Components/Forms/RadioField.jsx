import { useRadioGroup, HStack } from "@chakra-ui/react";
import { RadioCard } from "./RadioCard";
import { GET_PRODUCTS } from "../../Api/Public";
import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";

export function RadioField({ customOnChange }) {
  const [filterField, setfilterField] = useState(undefined);

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      orderBy: {
        field,
        direction: "desc",
      },
      filter: {
        filterBy: "categories",
        filterValue: filterField,
      },
    },
    pollInterval: 500,
  });
  console.log(data);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "categories",
    defaultValue: "react",
    onChange: { customOnChange },
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {error ? (
        <ErrorPage message={error.message} />
      ) : loading ? (
        <ErrorPage />
      ) : (
        data.products.categories.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })
      )}
    </HStack>
  );
}
