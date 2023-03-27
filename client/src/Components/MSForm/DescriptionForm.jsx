import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Stack, Textarea } from "@chakra-ui/react";
export function DescriptionForm({ onNext, onPrevious, values }) {
  const [description, setDescription] = useState(values.description);

  const handleNext = () => {
    onNext({ description });
  };

  const handlePrevious = () => {
    onPrevious({ description });
  };

  return (
    <Stack spacing={3}>
      <FormControl id="description" isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <Stack direction="row" spacing={3}>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext} colorScheme="teal" disabled={!description}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
