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

export function EditModal({
  modalHeader,
  submit,
  formikProps,
  id,
  status,
  userId,
  price,
  rentPrice,
  title,
  description,
  categories,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant={"outline"}
        aria-label={"Edit Profile"}
      >
        {<FaPenSquare />}
      </IconButton>
      <Formik
        initialValues={{
          status: status,
          userId: userId,
          price: price,
          rentPrice: rentPrice,
          title: title,
          description: description,
          categories: categories,
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
                <ModalBody pb={2} gap={10}>
                  <InputField
                    label="Title"
                    name="title"
                    placeholder="Product Name"
                  />
                  <NumInputField
                    label="Rent Cost"
                    name="rentPrice"
                    placeholder="Per Hour"
                  />
                  <NumInputField
                    label="Price"
                    name="price"
                    placeholder="Your Price"
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
