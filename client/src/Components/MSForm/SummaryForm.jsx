import React, { useState } from "react";
import { Button, Stack, Text } from "@chakra-ui/react";

export function SummaryForm({ values, onReset, onSubmit }) {
  const [disabled, setDisabled] = useState('');
  Object.keys(values).forEach((key) => {
    if (values[key] === null || values[key] === undefined) {
      setDisabled(o);
    }
  });
  return (
    <Stack spacing={3}>
      <Text>Title: {values.title}</Text>
      <Text>Description: {values.description}</Text>
      <Text>Category: {values.categories}</Text>
      <Text>Price: {values.price}</Text>
      <Text>Rent Price: {values.rentPrice}</Text>
      <Text>Product Status: {values.status}</Text>
      <Text>Owner ID: {values.userId}</Text>
      <Stack direction="row" spacing={3}>
        <Button onClick={onReset}>Reset</Button>
        <Button
          isDisabled={disabled}
          colorScheme={disabled ? "red" : "teal"}
          variant={disabled ? "ghost" : "outline"}
          onClick={onSubmit}
        >
          {disabled
            ? "Fill the empty fields Nacho"
            : "Submit"}
        </Button>
      </Stack>
    </Stack>
  );
}
