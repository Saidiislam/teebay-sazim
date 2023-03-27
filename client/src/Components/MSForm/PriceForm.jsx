import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  Button, Divider,
  NumberInput,
  NumberInputField, Select,
  Spacer,
  Stack, Text,
} from "@chakra-ui/react";
export function PriceForm({ onNext, onPrevious, values }) {
  const [price, setPrice] = useState(values.price);
  const [rentPrice, setRentPrice] = useState(values.rentPrice);
  const [status, setStatus] = useState(values.status);
  const [userId, setUserId] = useState(values.userId);


  const handleNext = () => {
    onNext({ price, rentPrice, status, userId });
  };

  const handlePrevious = () => {
    onPrevious({ price, rentPrice, status, userId });
  };

  return (
    <Stack spacing={3}>
      <FormControl id="price" isRequired>
        <FormLabel>Price</FormLabel>
        <NumberInput value={price} onChange={(e) => setPrice(parseInt(e))}>
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl id="rentPrice" isRequired>
        <FormLabel>Rent Price (per day)</FormLabel>
        <NumberInput value={rentPrice} onChange={(e) => setRentPrice(parseInt(e))}>
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <Divider />
      <Text fontWeight={"bold"} color={"teal"}>Sandboxing Purposes but still required</Text>

      <FormControl id="status">
        <FormLabel>Product Status</FormLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">-- Please select --</option>
          <option value="UNSOLD">Unsold</option>
          <option value="BROUGHT">Brought</option>
          <option value="SOLD">Sold</option>
          <option value="BORROWED">Borrowed</option>
          <option value="LENT">Lent</option>

        </Select>
      </FormControl>

      <FormControl id="userId">
        <FormLabel>Product Owner</FormLabel>
        <Select value={userId} onChange={(e) => setUserId(parseInt(e.target.value))}>
          <option value="">-- Please select --</option>
          <option value="1">*Current User*</option>
        </Select>
      </FormControl>

      <Stack direction="row" spacing={3}>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext} colorScheme="teal" disabled={!price && !rentPrice}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
