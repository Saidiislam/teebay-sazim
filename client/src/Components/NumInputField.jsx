import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { NumberInput, NumberInputField } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

export const NumInputField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <FormControl isInvalid={hasError}>
      <FormLabel
        htmlFor={field.name}
        fontWeight="bold"
        fontSize="xs"
        textTransform="uppercase"
      >
        {label}
      </FormLabel>
      <NumberInput>
        <NumberInputField
          id={field.name}
          placeholder={placeholder}
          {...field}
        />
      </NumberInput>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
