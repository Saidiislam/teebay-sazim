import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/300.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./index.css";

const theme = extendTheme({
  styles: {
    global: {
      a: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

const client = new ApolloClient({
  uri: "http://localhost:3004/graphql",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`

//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </ApolloProvider>
);
