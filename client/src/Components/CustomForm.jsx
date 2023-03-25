import { VStack, Button, Heading, Link, Center } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "./InputField";
import { PasswordField } from "./PasswordField";
import { SignUpVal } from "../Util/YupConfig";
import { Link as ReactLink } from "react-router-dom";

export const CustomForm = ({
  submit,
  heading,
  btnName,
  alternate,
  switchTo,
  children,
}) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        password: "",
      }}
      onSubmit={submit}
      validationSchema={SignUpVal}
    >
      {(formikProps) => (
        <Form>
          <VStack spacing={4} align="stretch">
            <Heading as="h3" size="md">
              {heading}
            </Heading>

            {children}

            <hr />

            <VStack spacing={2}>
              <Button
                w={100}
                colorScheme="teal"
                size="lg"
                borderRadius="full"
                type="submit"
              >
                {btnName}
              </Button>
              <Link as={ReactLink} color="teal.500" to={switchTo}>
                {alternate}
              </Link>
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
