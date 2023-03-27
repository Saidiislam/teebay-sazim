import React from "react";
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { SignUpVal } from "../../Util/YupConfig.jsx";
import { InputField } from "../Forms/InputField.jsx";
import { NumInputField } from "../Forms/NumInputField.jsx";
import { FaPenSquare } from "react-icons/all.js";
import {FaPencilAlt} from "react-icons/fa";

// Defining Props for the modal for us to use
export function CustomModal({
  modalHeader, disabledProp,
                                submitHandler,
                                firstName,
  lastName,
  address,
  phone,
}) {
  //   button Toggle
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant={"outline"}
        aria-label={"Edit Profile"}
      >
        {<FaPencilAlt />}
      </IconButton>
      <Formik
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          address: address,
          phone: phone,
        }}
        onSubmit={submitHandler}
        validationSchema={SignUpVal}
      >
        {({formikProps}) => (
          <Form minh={"50vh"}>
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
                  <Button colorScheme="teal" mr={3} type="submit" disabled={disabledProp}>
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
