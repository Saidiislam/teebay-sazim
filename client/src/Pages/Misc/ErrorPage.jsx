import React from "react";
import { Center, Code, Text, VStack } from "@chakra-ui/react";

export const ErrorPage = ({ message }) => {
  const ascii = "( ╥﹏╥) ノシ";
  const asciiHappy = "( ´◔ ω◔`) ノシ";
  return (
    <Center minH={"70vh"} color={"gray.500"}>
      <VStack gap={2}>
        <Text fontSize={"4xl"}>{message ? ascii : asciiHappy}</Text>
        <Code>{message ? message : "Sure is empty!"}</Code>
      </VStack>
    </Center>
  );
};
