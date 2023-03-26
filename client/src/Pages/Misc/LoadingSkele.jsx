import { Skeleton } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../../Components/ProductCard";

export const LoadingSkele = () => {
  return (
    <Skeleton gap={2}>
      <Skeleton height="30px" />
      <Skeleton height="20px" />
      <Skeleton height="60px" />
      <Skeleton height="40px" />
      <Skeleton height="70px" />
      <Skeleton height="30px" />
      <Skeleton height="20px" />
      <Skeleton height="60px" />
      <Skeleton height="40px" />
      <Skeleton height="70px" />
    </Skeleton>
  );
};
