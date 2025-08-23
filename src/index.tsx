import React from "react";
import ReactDOM from "react-dom/client";

import { Box, Button, HStack, Text, VStack } from "./crystals";

import "./global.css";

export const App = () => {
  return (
    <Box p={24}>
      <VStack spacing={16} ai="center">
        <Text fontSize="2xl" fontWeight="bold" color="primary">
          Vanilla Sugar Demo
        </Text>

        <Text fontSize="md" color="secondary">
          A modern, type-safe UI component library
        </Text>

        <HStack spacing={12}>
          <Button variant="primary" size="large">
            Primary Button
          </Button>

          <Button variant="secondary" size="large">
            Secondary Button
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
