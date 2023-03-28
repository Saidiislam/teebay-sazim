import {
  Container,
  Heading,
  Box,
  Button,
  Text,
  Flex,
  ButtonGroup,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { useUpdateProduct } from "../../Api/UseUpdateProduct";
import { Link } from "react-router-dom";

export function SingleProduct({
  id,
  categories,
  title,
  description,
  price,
  rentPrice,
}) {

  // <=== To DO: Implement Update Function ===>
  const [updateProduct, { loading, error }] = useUpdateProduct();

  const updateOnClick = async () => {
    const updatedProduct = await updateProduct({ id });
  };

  return (
    <>
      <Box gap={2} boxShadow="base" p="2" rounded="md" bg="white">
        <Flex direction="column" p={3}>
          <Flex justifyContent="left" gap={1} alignItems="center">
            {categories}
          </Flex>
          <Heading
            as="h1"
            size="lg"
            my={4}
            overflowWrap="break-word"
            maxW="30ch"
          >
            {title}
          </Heading>
          <Text fontSize="lg" mb={8}>
            {description}
          </Text>
          <Flex justifyContent="space-between" alignItems="baseline" mb={8}>
            <Text fontSize="2xl" fontWeight="bold" color="green.500">
              {`${price}/=`}
            </Text>
            <Text fontSize="lg" color="gray.500">
              or Rent for {rentPrice}/month
            </Text>
          </Flex>
          <ButtonGroup variant="outline" spacing={4} alignSelf="flex-end">
            <Button>Rent it</Button>
            <Button
              colorScheme="green"
              as={Link}
              onClick={updateOnClick}
              to={"/"}
            >
              Buy Now
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
