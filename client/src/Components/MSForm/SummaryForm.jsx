import React, { useState } from "react";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";

export function SummaryForm({ values, onReset, onSubmit }) {
  const [disabled, setDisabled] = useState("");
  Object.keys(values).forEach((key) => {
    if (values[key] === null || values[key] === undefined) {
      setDisabled(o);
    }
  });
  return (
    <Stack spacing={3}>
      <Flex>
        <Text fontWeight="bold" color="gray.500">
          Title:{" "}
        </Text>
        <Text ml="2" color="gray.500">
          {" "}
          {values.title}
        </Text>
      </Flex>
      <Flex>
        <Text fontWeight="bold" color="gray.500">
          Description:{" "}
        </Text>
        <Text ml="2" color="gray.500">
          {values.description}
        </Text>
      </Flex>
      <Flex>
        <Text fontWeight="bold" color="gray.500">
          Category:{" "}
        </Text>
        <Text ml="2" color="gray.500">
          {values.categories}
        </Text>
      </Flex>
      <Flex>
        <Text fontWeight="bold" color="gray.500">
          Price:{" "}
        </Text>
        <Text ml="2" color="gray.500">
          {values.price}
        </Text>
      </Flex>
      <Flex>
        <Text fontWeight="bold" color="gray.500">
          Rent Price:{" "}
        </Text>
        <Text ml="2" color="gray.500">
          {values.rentPrice}
        </Text>
      </Flex>
      <Flex>
        <Text fontWeight="bold" color="gray.500">
          Product Status:{" "}
        </Text>
        <Text ml="2" color="gray.500">
          {values.status}
        </Text>
      </Flex>
      <Flex>
        <Text fontWeight="bold" color="gray.500">
          Owner ID:{" "}
        </Text>
        <Text ml="2" color="gray.500">
          {values.userId}
        </Text>
      </Flex>

      <Stack direction="row" spacing={3}>
        <Button onClick={onReset}>Reset</Button>
        <Button
          isDisabled={disabled}
          colorScheme={disabled ? "red" : "teal"}
          variant={disabled ? "ghost" : "outline"}
          onClick={onSubmit}
        >
          {disabled ? "Fill the empty fields Nacho" : "Submit"}
        </Button>
      </Stack>
    </Stack>
  );
}
