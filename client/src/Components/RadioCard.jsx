import { useRadio, Box } from "@chakra-ui/react";
import React from "react";

export const RadioCard = (props) => {
  const { getCheckboxProps } = useRadio(props);

  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        fontSize="lg"
        _checked={{
          bg: "blue.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={2}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
};
