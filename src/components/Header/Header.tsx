import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <ChakraProvider>
      <Box
        textAlign={"center"}
        textColor={"black"}
        fontSize={24}
        fontWeight={"semibold"}
        padding={4}
      >
        <h1> Desenvolvendo o Dio Bank </h1>
      </Box>
    </ChakraProvider>
  );
}
