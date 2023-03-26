import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { InputGroup, InputRightElement, Input, Button } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

export const PasswordField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = Boolean(meta.touched && meta.error);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
      <InputGroup size="md">
        <Input
          id={field.name}
          placeholder={placeholder}
          {...field}
          pr="4.5rem"
          type={show ? "text" : "password"}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
