import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
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
