import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export function CategoryForm({ onNext, onPrevious , values }) {
  const [categories, setCategories] = useState(
    values.categories || ["ELECTRONICS"]
  );

  const handleNext = () => {
    onNext({ categories });
  };

  const handlePrevious = () => {
    onPrevious({ categories });
  };

  return (
    <Stack spacing={3}>
      <FormControl id="categories" isRequired>
        <FormLabel>Categories</FormLabel>
        <CheckboxGroup
          value={categories}
          onChange={(values) => {
            return setCategories(values);
          }}
        >
          <Stack direction="column">
            <Checkbox value="ELECTRONICS">Electronics</Checkbox>
            <Checkbox value="FURNITURE">Furniture</Checkbox>
            <Checkbox value="HOME_APPLIANCES">Home Appliances</Checkbox>
            <Checkbox value="SPORTING_GOODS">Sporting Goods</Checkbox>
            <Checkbox value="OUTDOOR">Outdoor</Checkbox>
            <Checkbox value="TOYS">Toys</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormControl>
      <Stack direction="row" spacing={3}>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button
          onClick={handleNext}
          disabled={categories.length === 0 || false}
          colorScheme="teal"
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
