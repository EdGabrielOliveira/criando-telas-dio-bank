import { ChakraProvider } from "@chakra-ui/react";
import CardLogin from "./components/Card/CardLogin";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <CardLogin />
    </ChakraProvider>
  );
}
