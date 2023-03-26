import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { CustomModal } from "./CustomModal.jsx";
export const ProfileCard = ({ firstName, lastName, email, address, phone }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      boxShadow="md"
      _hover={{
        opacity: "0.8",
        boxShadow: "xl",
        transition: "opacity 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
      }}
      transition="opacity 0.2s ease-in-out"
      bgGradient="linear(to-b, teal.400, teal.300)"
      color="white"
      _hover={{
        opacity: "0.8",
        transition: "opacity 0.2s ease-in-out",
      }}
      minH="200px"
      minW="200px"
    >
      <Flex justifyContent={"space-between"}>
        <Heading as="h2" size="xl" fontWeight="bold" mb="2">
          {firstName} {lastName}
        </Heading>
        <Spacer />
        <CustomModal />
      </Flex>

      <Text fontSize="lg" fontWeight="semibold" my="2">
        {email}
      </Text>
      <Text fontSize="md" fontWeight="medium" my="2">
        {address}
      </Text>
      <Text fontSize="sm" fontWeight="bold" my="2">
        {phone}
      </Text>
    </Box>
  );
};