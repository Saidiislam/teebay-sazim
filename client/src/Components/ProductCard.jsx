import React, { useMemo } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { css } from "@emotion/react";
import { format } from "date-fns";
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

// using memo to avoid unnecessary re-renders
export const ProductCard = React.memo(
  ({ title, description, category, price, createdAt, href, ...rest }) => {
    const formattedDate = useMemo(() => {
      // format createdAt date here
      if (!createdAt) {
        return;
      }
      return format(new Date(createdAt), "Pp");
    }, [createdAt]);

    return (
      <Link
        href={href}
        css={css`
          text-decoration: none;
          &:hover {
            text-decoration: none;
          }
        `}
      >
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
            <ButtonGroup gap="2">
              <IconButton
                variant={"ghost"}
                colorScheme={"teal"}
                aria-label="Edit Post"
                icon={<FaPencilAlt />}
              />
              <IconButton
                variant={"ghost"}
                colorScheme={"red"}
                aria-label="Delete Post"
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
      </Link>
    );
  }
);
