import React from "react";

import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
} from "./src/crystals";

import "./src/global.css";

// Пример использования библиотеки Vanilla Sugar
const ExampleApp: React.FC = () => {
  return (
    <Box p={24} bg="tertiary" minH="screen">
      <VStack spacing={32} ai="center">
        {/* Заголовок */}
        <VStack spacing={16} ai="center">
          <Text fs="2xl" fw="bold" color="primary">
            Добро пожаловать в Vanilla Sugar
          </Text>

          <Text fs="md" color="secondary" ta="center" maxW={256}>
            Современная UI библиотека с TypeScript
            поддержкой и атомарными CSS утилитами
          </Text>
        </VStack>

        {/* Кнопки */}
        <VStack spacing={16} ai="center">
          <Text fs="lg" fw="medium" color="secondary">
            Кнопки
          </Text>

          <HStack spacing={12} jc="center">
            <Button variant="primary" size="large">
              Основная
            </Button>

            <Button variant="secondary" size="large">
              Вторичная
            </Button>

            <Button variant="outline" size="large">
              Контурная
            </Button>

            <Button variant="ghost" size="large">
              Прозрачная
            </Button>
          </HStack>
        </VStack>

        {/* Layout примеры */}
        <VStack spacing={16} ai="center">
          <Text fs="lg" fw="medium" color="secondary">
            Layout компоненты
          </Text>

          {/* Flex пример */}
          <Box w="full" maxW={600}>
            <Flex
              fd="row"
              jc="between"
              ai="center"
              p={16}
              bg="white"
              br={8}
              gap={16}
            >
              <Text fs="md" fw="medium">Левая часть</Text>

              <Text fs="sm" color="secondary">Правая часть</Text>
            </Flex>
          </Box>

          {/* HStack пример */}
          <HStack spacing={8} ai="center" jc="center">
            {["Элемент 1", "Элемент 2", "Элемент 3"].map((item, index) => (
              <Box
                key={index}
                p={12}
                bg="primary"
                color="white"
                br={6}
                minW={80}
              >
                <Text fs="sm" ta="center">{item}</Text>
              </Box>
            ))}
          </HStack>

          {/* VStack пример */}
          <Box w="full" maxW={400}>
            <VStack spacing={8} p={16} bg="white" br={8}>
              <Text fs="md" fw="medium" color="primary">Список элементов</Text>

              {["Пункт 1", "Пункт 2", "Пункт 3"].map((item, index) => (
                <Box key={index} p={8} bg="tertiary" br={4} w="full">
                  <Text fs="sm">{item}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>

        {/* Responsive пример */}
        <VStack spacing={16} ai="center">
          <Text fs="lg" fw="medium" color="secondary">
            Responsive дизайн
          </Text>

          <Box
            w={{ mobile: 200, tablet: 300, desktop: 400 }}
            h={{ mobile: 100, tablet: 150, desktop: 200 }}
            bg="primary"
            br={8}
            p={16}
          >
            <Center h="full">
              <Text color="white" fs="md" ta="center">
                Адаптивный контейнер
              </Text>
            </Center>
          </Box>
        </VStack>

        {/* Цветовая палитра */}
        <VStack spacing={16} ai="center">
          <Text fs="lg" fw="medium" color="secondary">
            Цветовая палитра
          </Text>

          <HStack spacing={8} jc="center">
            {[
              { name: "Primary", color: "primary" },
              { name: "Secondary", color: "secondary" },
              { name: "Tertiary", color: "tertiary" },
              { name: "White", color: "white", textColor: "secondary" },
            ].map(({ name, color, textColor = "white" }) => (
              <Box
                key={name}
                w={80}
                h={60}
                bg={color}
                color={textColor}
                br={6}
                p={8}
              >
                <Center h="full">
                  <Text fs="xs" ta="center" fw="medium">
                    {name}
                  </Text>
                </Center>
              </Box>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ExampleApp;
