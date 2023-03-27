import React from "react";
import "./App.css";
import { Heading, VStack, Container, Grid } from "@chakra-ui/react";
import { Router } from "./Config/Router";
import {CreateProductForm} from "./Components/Forms/CreateProductForm.jsx";
import {ParentForm} from "./Components/MSForm/ParentForm.jsx";

export const App = () => {
  return (
    <>
      <Grid minH={"100vh"} bg={"gray.50"}>
        <Container maxW={"container.sm"}>
          <VStack>
            <Heading as={"h1"} size={"xl"}>
              Nadim, Good luck!
            </Heading>
            {/*<CreateProductForm />*/}
            <Router />
          </VStack>
        </Container>
      </Grid>
    </>
  );
};
