import { Box, Input } from "@chakra-ui/react";
import React from "react";
import ButtonLogin from "../ButtonLogin/ButtonLogin";

export default function CardLogin() {
  return (
    <Box minHeight="100vh" bgColor="#9413dc" padding={25}>
      <Box bgColor="white" borderRadius={25} textAlign={"center"} padding={15}>
        <h1>Faça login</h1>
        <Input placeholder="Email" type="email" marginTop={4} marginBottom={4} />
        <Input placeholder="Password" type="password" />
        <ButtonLogin nome={"Entrar"} colorScheme="teal" marginTop={6} width={"full"} />
      </Box>
    </Box>
  );
}
