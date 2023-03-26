import React from "react";
import {useParams} from "react-router-dom";
import {GET_SINGLE_PRODUCT} from "../Api/Public.jsx";
import {useQuery} from "@apollo/client";
import {TopBar} from "./Misc/TopBar.jsx";
import {Badge, Box} from "@chakra-ui/react";
import {ErrorPage} from "./Misc/ErrorPage.jsx";
import {LoadingSkele} from "./Misc/LoadingSkele.jsx";
import {SingleProduct} from "../Components/Cards/SingleProduct.jsx";


export function SingleProdPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT, {
    variables: {
      productId: parseInt(id),
    },
    pollInterval: 500,
  });

  return (
    <>
      <Box w={"100%"}>
        <TopBar />
        {error ? (
          <ErrorPage message={error.message} />
        ) : loading ? (
          <LoadingSkele />
        ) : (
          <>
            <SingleProduct
              price={data.product.price}
              rentPrice={data.product.rentPrice}
              description={data.product.description}
              title={data.product.title}
              categories={data.product.categories.map((item) => (
                <Badge variant="solid" colorScheme="green" key={item}>
                  {item}
                </Badge>
              ))}
            />
          </>
        )}
      </Box>
    </>
  );
}
