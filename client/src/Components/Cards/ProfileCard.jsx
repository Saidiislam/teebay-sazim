import { Box, Flex, Heading, Spacer, Text, useQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../Api/Public.jsx";
import { useState } from "react";
import { getToken } from "../../Api/Auth/AuthService.jsx";

export const ProfileCard = ({ id, firstName, lastName, address, phone }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER);

  const [user, setUser] = useState({});

  useEffect(() => {
    const token = getToken();
    setUser(token);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = await updateUser(user.id, {
        firstName,
        lastName,
        address,
        phone,
      });
    } catch (e) {
      console.error("Error updating user:", e);
    }
  };

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
          {user.firstName} {user.lastName}
        </Heading>
        <Spacer />
        {/*passing the variables to the modal*/}
      </Flex>

      <Text fontSize="lg" fontWeight="semibold" my="2">
        {user.email}
      </Text>
      <Text fontSize="md" fontWeight="medium" my="2">
        {user.address}
      </Text>
      <Text fontSize="sm" fontWeight="bold" my="2">
        {user.phone}
      </Text>
    </Box>
  );
};
