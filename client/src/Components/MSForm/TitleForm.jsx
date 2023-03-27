import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Input, Stack } from "@chakra-ui/react";
export function TitleForm({ onNext, onPrevious, values }) {
  const [title, setTitle] = useState(values.title);

  const handleNext = () => {
    onNext({ title });
  };

  return (
    <Stack spacing={3}>
      <FormControl id="title" isRequired>
        <FormLabel>Title</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>
      <Button onClick={handleNext} colorScheme="teal" disabled={!title}>
        Next
      </Button>
    </Stack>
  );
}
