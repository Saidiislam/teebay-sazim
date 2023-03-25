import React from "react";
import "./App.css";
import { Heading, VStack, Container, Grid } from "@chakra-ui/react";
import { ProductsPage } from "./Pages/ProductsPage";
import { SignUp } from "./Pages/SignUp";
import { Router } from "./Config/Router";

export const App = () => {
  return (
    <>
      <Grid minH={"100vh"} bg={"gray.50"}>
        <Container maxW={"container.sm"}>
          <VStack>
            <Heading as={"h1"} size={"xl"}>
              Nadim, Good luck!
            </Heading>
            <Router />
          </VStack>
        </Container>
      </Grid>
    </>
  );
};
