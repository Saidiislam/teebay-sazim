import React from "react";
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Stack,
  IconButton,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

export function PageHeadWSort({
  title,
  customOnChange,
  customValue,
  children,
}) {
  return (
    <Flex mb={2}>
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Spacer />
      <RadioGroup onChange={customOnChange} value={customValue}>
        <Stack direction="row">{children}</Stack>
      </RadioGroup>
    </Flex>
  );
}
