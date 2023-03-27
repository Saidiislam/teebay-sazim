import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
  Progress,
  SlideFade,
} from "@chakra-ui/react";
import { useState } from "react";
import { CategoryForm } from "./CategoryForm.jsx";
import { DescriptionForm } from "./DescriptionForm.jsx";
import { PriceForm } from "./PriceForm.jsx";
import { TitleForm } from "./TitleForm.jsx";
import { SummaryForm } from "./SummaryForm.jsx";
import { useCreateProduct } from "../../Util/UseCreateProduct.jsx";

export function ParentForm() {
  const [createProduct, { loading, error }] = useCreateProduct();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formValues, setFormValues] = useState({
    title: "",
    price: "",
    description: "",
    rentPrice: "",
    status: "",
    userId: "",
    categories: "",
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleNext = (values) => {
    setFormValues((prevValues) => ({ ...prevValues, ...values }));
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevious = (values) => {
    setFormValues((prevValues) => ({ ...prevValues, ...values }));
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleSubmit = async (event) => {
    // handle form submission here
    event.preventDefault();
    try {
      const createdProduct = await createProduct({
        title : formValues.title,
        price : formValues.price,
        description : formValues.description,
        rentPrice : formValues.rentPrice,
        status : formValues.status,
        userId : formValues.userId,
        categories : formValues.categories,
      });
      console.log("Created product:", createdProduct);
    } catch (e) {
      console.error("Error creating product:", e);
    }
    console.log("Form submitted:", formValues);
    handleClose();
  };
  const handleReset = () => {
    setCurrentPage(1);
    setFormValues({
      title: "",
      price: "",
      description: "",
      rentPrice: "",
      status: "",
      userId: "",
      categories: "",
    });
  };

  const progress = ((currentPage - 1) / 4) * 100;

  return (
    <>
      <Button size={"sm"} mr={"4"} colorScheme={"teal"} onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent minH="30vh" p={5}>
          <Progress value={progress} colorScheme="teal" mb={4} />
          <ModalHeader>Form</ModalHeader>
          <ModalBody>
            {currentPage === 1 && (
              <SlideFade in={true} reverse={true}>
                <TitleForm
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  values={formValues}
                />
              </SlideFade>
            )}
            {currentPage === 2 && (
              <SlideFade in={true} reverse={true}>
                <CategoryForm onNext={handleNext} values={formValues} />
              </SlideFade>
            )}
            {currentPage === 3 && (
              <SlideFade in={true} reverse={true}>
                <DescriptionForm
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  values={formValues}
                />
              </SlideFade>
            )}
            {currentPage === 4 && (
              <SlideFade in={true} reverse={true}>
                <PriceForm
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  values={formValues}
                />
              </SlideFade>
            )}
            {currentPage === 5 && (
              <SlideFade in={true} reverse={true}>
                <SummaryForm
                  values={formValues}
                  onReset={handleReset}
                  onSubmit={handleSubmit}
                />
              </SlideFade>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
