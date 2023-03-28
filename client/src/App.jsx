import React from "react";
import { VStack, Container, Grid } from "@chakra-ui/react";
import { Router } from "./Config/Router";


export const App = () => {
  return (
    <>
      <Grid minH={"100vh"} bg={"gray.50"}>
        <Container maxW={"container.sm"}>
          <VStack>
            <Router />
          </VStack>
        </Container>
      </Grid>
    </>
  );
};
