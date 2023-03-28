import React, { useState } from "react";
import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";
import { CustomForm } from "../../Components/Forms/CustomForm.jsx";
import { InputField } from "../../Components/Forms/InputField.jsx";
import { NumInputField } from "../../Components/Forms/NumInputField.jsx";
import { PasswordField } from "../../Components/Forms/PasswordField.jsx";
import { SignUpVal } from "../../Util/YupConfig.jsx";
import { useCreateUser } from "../../Api/UseCreateUser.jsx";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [createUser, { loading, error }] = useCreateUser();
  const [isCreated, setIsCreated] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (values) => {
    try {
      const createdUser = await createUser({
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        email: values.email,
        phone: parseInt(values.phone),
        password: values.password,
      });

      setIsCreated(true);
      onOpen();
    } catch (e) {
      console.error("Error Creating User:", e);
    }
  };

  return (
    <Center minH={"100vh"}>
      <SlideFade in={true} reverse={true}>
        <CustomForm
          initialValues={{
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            phone: "",
            password: "",
          }}
          validationSchema={SignUpVal}
          submit={handleSubmit}
          alternate={"Sign In"}
          btnName={"Sign Up"}
          heading={"Register an account"}
          switchTo={"/login"}
        >
          <InputField
            label="First Name"
            name="firstName"
            placeholder="First Name"
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
          />

          <InputField label="Address" name="address" placeholder="Address" />

          <InputField label="Email Address" name="email" placeholder="Email" />

          <NumInputField label="Phone" name="phone" placeholder="phone" />

          <PasswordField
            label="Password"
            name="password"
            placeholder="Enter Password"
          />
        </CustomForm>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent p={4}>
            <ModalHeader textAlign="center" fontSize="2xl">
              🎉 Congratulations! 🎉
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center fontSize="l" textAlign={"center"}>
                Your account has been created successfully. Please Login Again
                to get access! 🥳
              </Center>
              <Center pt="4">
                <Button
                  as={Link}
                  onClick={onClose}
                  colorScheme="teal"
                  rounded={"full"}
                  size={"sm"}
                  to={"/login"}
                >
                  Go to Login
                </Button>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </SlideFade>
    </Center>
  );
};
