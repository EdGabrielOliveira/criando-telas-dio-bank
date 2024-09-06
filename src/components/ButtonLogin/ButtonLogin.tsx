import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

import { login } from "../../services/login";

interface ButtonPropsLogin {
  nome: string;
}

export default function ButtonLogin({ nome, ...props }: ButtonPropsLogin & ButtonProps) {
  return (
    <Button onClick={login} {...props}>
      {nome}
    </Button>
  );
}
