import React from "react";
import {
    Button, IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Form, Formik } from "formik";
import { SignUpVal } from "../../Util/YupConfig.jsx";
import { InputField } from "../Forms/InputField.jsx";
import { NumInputField } from "../Forms/NumInputField.jsx";
import {FaPenSquare} from "react-icons/all.js";

export function CustomModal({
  modalHeader,
  submit,
  firstName,
  lastName,
  address,
  email,
  phone,
  password,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <IconButton onClick={onOpen} variant={"outline"} aria-label={"Edit Profile"}>{<FaPenSquare/>}</IconButton>
      <Formik
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          address: address,
          email: email,
          phone: phone,
          password: password,
        }}
        onSubmit={submit}
        validationSchema={SignUpVal}
      >
        {(formikProps) => (
          <Form>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{modalHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
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
                  <InputField
                    label="Address"
                    name="address"
                    placeholder="Address"
                  />
                  <NumInputField
                    label="Phone"
                    name="phone"
                    placeholder="phone"
                  />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="teal" mr={3} type="submit">
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Form>
        )}
      </Formik>
    </>
  );
}
