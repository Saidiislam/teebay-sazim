import React, { useMemo } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { css } from "@emotion/react";
import { format } from "date-fns";
import { Link as ReactLink } from "react-router-dom";
import {
  Box,
  ButtonGroup,
  Flex,
  Spacer,
  Heading,
  Text,
  Badge,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { REMOVE_PRODUCT } from "../../Api/Public.jsx";
import { EditModal } from "./EditModal.jsx";
import { ParentForm } from "../MSForm/ParentForm.jsx";

// using memo to avoid unnecessary re-renders
export const NonNavProductCard = React.memo(
  ({
    id,
    title,
    description,
    category,
    price,
    createdAt,
    userid,
    switchTo,
    href,
    stateValue,
    rentPrice,
    categories,
    ...rest
  }) => {
    const [removeProduct, { loading, error }] = useMutation(REMOVE_PRODUCT);

    // Function to invoke deleting process
    const handleRemoveClick = async () => {
      try {
        const { data } = await removeProduct({
          variables: { removeProductId: id },
        });
      } catch (e) {
        console.error("Error removing product:", e);
      }
    };

    const formattedDate = useMemo(() => {
      // format createdAt date here
      if (!createdAt) {
        return;
      }
      return format(new Date(createdAt), "Pp");
    }, [createdAt]);

    return (
      <Box
        p={4}
        mb={2}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="xs"
        transition="box-shadow 0.2s"
        _hover={{ boxShadow: "md" }}
        {...rest}
      >
        {/* Top Part: Title and buttons */}
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box>
            <Heading size="md" overflowWrap="break-word" maxW="30ch">
              {title}
            </Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="0">
            {/* Button Groups*/}
            <ParentForm formName={"edit product"} />
            <IconButton
              variant={"ghost"}
              colorScheme={"red"}
              aria-label="Delete Post"
              onClick={handleRemoveClick}
              icon={<FaTrashAlt />}
            />
          </ButtonGroup>
        </Flex>
        {/* Mid Part: Badges and desc */}
        <Text fontSize="md" mb={2}>
          {category.map((item, index) => (
            <Badge
              key={index}
              mr="1"
              fontSize="0.6em"
              colorScheme="green"
              rounded={"md"}
            >
              {item}
            </Badge>
          ))}
        </Text>
        <Text fontSize="sm" textColor={"GrayText"} noOfLines={1} mb={2}>
          {description}
        </Text>
        {/* Bottom Part: Price and tools */}
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box>
            <Heading size="md" color="teal.500">
              Price: {price}/=
            </Heading>
          </Box>
          <Spacer />
          <Text
            fontSize={"xs"}
            textColor={"GrayText"}
            noOfLines={1}
            wordBreak="break-word"
          >
            {formattedDate}
          </Text>
        </Flex>
      </Box>
    );
  }
);
