# Локальная установка Vanilla Sugar

Этот документ описывает, как использовать библиотеку Vanilla Sugar локально в другом проекте.

## 🚀 Быстрый старт

### 1. Подготовка библиотеки

Сначала соберите библиотеку:

```bash
# В директории vanilla-sugar
npm install
# или если используете pnpm
pnpm install

npm run build
# или
pnpm build
```

### 2. Установка в другой проект

#### Вариант A: Ссылка на локальную папку

```bash
# В вашем проекте (npm)
npm install /путь/к/vanilla-sugar
# или
npm install file:/путь/к/vanilla-sugar

# В вашем проекте (pnpm)
pnpm add /путь/к/vanilla-sugar
# или
pnpm add file:/путь/к/vanilla-sugar
```

#### Вариант B: npm/pnpm link (рекомендуется для разработки)

```bash
# В директории vanilla-sugar
npm link
# или
pnpm link --global

# В вашем проекте
npm link vanilla-sugar
# или
pnpm link vanilla-sugar
```

#### Вариант C: Символическая ссылка

```bash
# В директории вашего проекта
ln -s /путь/к/vanilla-sugar node_modules/vanilla-sugar
# или для pnpm
ln -s /путь/к/vanilla-sugar node_modules/.pnpm/vanilla-sugar@1.0.0/node_modules/vanilla-sugar
```

### 3. Использование в проекте

```tsx
// Импорт компонентов
import { Box, Button, Text, HStack, VStack } from "vanilla-sugar";

// Импорт стилей (обязательно!)
import "vanilla-sugar/global.css";

function App() {
  return (
    <Box p={24}>
      <VStack spacing={16} ai="center">
        <Text fs="2xl" fw="bold" color="primary">
          Мой проект
        </Text>

        <HStack spacing={12}>
          <Button variant="primary" size="large">
            Основная кнопка
          </Button>

          <Button variant="secondary" size="large">
            Вторичная кнопка
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
```

## 📦 Доступные компоненты

### Layout компоненты

- `Box` - базовый контейнер
- `Flex` - flexbox контейнер
- `HStack` - горизонтальный стек
- `VStack` - вертикальный стек
- `Center` - центрированный контейнер

### Form компоненты

- `Button` - кнопка с различными вариантами
- `IconButton` - кнопка с иконкой

### Typography

- `Text` - текстовый компонент

## 🎨 Стилизация

Все компоненты поддерживают атомарные CSS пропсы:

```tsx
<Box
  w={200} // width
  h={100} // height
  p={16} // padding
  m={8} // margin
  bg="primary" // background color
  color="white" // text color
  br={8} // border radius
>
  <Text fs="lg" fw="bold">
    Стилизованный контейнер
  </Text>
</Box>
```

## 🔧 Настройка для разработки

Если вы разрабатываете библиотеку параллельно с проектом:

### С npm

1. Используйте `npm link` для создания символической ссылки
2. В библиотеке запустите `npm run dev` для отслеживания изменений
3. В проекте изменения будут применяться автоматически

### С pnpm (рекомендуется)

1. Используйте `pnpm link --global` для создания глобальной ссылки
2. В библиотеке запустите `pnpm dev` для отслеживания изменений
3. В проекте изменения будут применяться автоматически

```bash
# В директории vanilla-sugar
pnpm link --global

# В вашем проекте
pnpm link vanilla-sugar

# Для отмены связи
pnpm unlink vanilla-sugar
```

## ⚠️ Важные замечания

1. **Обязательно импортируйте стили**: `import 'vanilla-sugar/global.css'`
2. **React версия**: Библиотека требует React 19+
3. **TypeScript**: Полная поддержка TypeScript с типами
4. **Vanilla Extract**: CSS генерируется во время сборки

## 🐛 Решение проблем

### Проблема: Стили не применяются

**Решение**: Убедитесь, что импортировали CSS файл:

```tsx
import "vanilla-sugar/global.css";
```

### Проблема: Ошибки TypeScript

**Решение**: Убедитесь, что установили зависимости:

```bash
npm install react@^19.1.0 react-dom@^19.1.0
```

### Проблема: Компоненты не найдены

**Решение**: Проверьте, что библиотека собрана:

```bash
cd vanilla-sugar
npm run build
```

## 📝 Пример полного использования

```tsx
import React from "react";
import { Box, Button, Text, HStack, VStack, Flex } from "vanilla-sugar";
import "vanilla-sugar/global.css";

const App: React.FC = () => {
  return (
    <Box p={24} bg="tertiary" minH="screen">
      <VStack spacing={24} ai="center">
        <Text fs="2xl" fw="bold" color="primary">
          Добро пожаловать в Vanilla Sugar
        </Text>

        <Text fs="md" color="secondary" ta="center">
          Современная UI библиотека с TypeScript поддержкой
        </Text>

        <Flex gap={16} wrap="wrap" jc="center">
          <Button variant="primary" size="large">
            Начать работу
          </Button>

          <Button variant="outline" size="large">
            Документация
          </Button>
        </Flex>

        <HStack spacing={16} ai="center">
          <Box w={100} h={60} bg="primary" br={8} />
          <Box w={100} h={60} bg="secondary" br={8} />
          <Box w={100} h={60} bg="tertiary" br={8} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default App;
```

## 🚀 Специально для pnpm

### Быстрый старт с pnpm

```bash
# 1. Подготовка библиотеки
cd vanilla-sugar
pnpm install
pnpm build

# 2. Создание глобальной ссылки
pnpm link --global

# 3. В вашем проекте
cd ../ваш-проект
pnpm link vanilla-sugar

# 4. Использование
import { Box, Button } from "vanilla-sugar";
import "vanilla-sugar/global.css";
```

### Альтернативные способы с pnpm

#### Способ 1: Прямая установка из папки

```bash
# В вашем проекте
pnpm add /путь/к/vanilla-sugar
```

#### Способ 2: Через workspace (если используете monorepo)

```yaml
# pnpm-workspace.yaml
packages:
  - "packages/*"
  - "vanilla-sugar"
```

```json
// package.json в вашем проекте
{
  "dependencies": {
    "vanilla-sugar": "workspace:*"
  }
}
```

#### Способ 3: Символическая ссылка (если link не работает)

```bash
# Найдите путь к пакету в pnpm
pnpm list vanilla-sugar

# Создайте символическую ссылку
ln -s /путь/к/vanilla-sugar node_modules/.pnpm/vanilla-sugar@1.0.0/node_modules/vanilla-sugar
```

### Отладка проблем с pnpm

#### Проблема: pnpm link не работает

```bash
# Проверьте глобальные пакеты
pnpm list -g

# Удалите и пересоздайте ссылку
pnpm unlink --global vanilla-sugar
pnpm link --global
```

#### Проблема: Стили не загружаются

```bash
# Убедитесь, что CSS файл существует
ls dist/vanilla-sugar.css

# Пересоберите библиотеку
pnpm build
```

#### Проблема: TypeScript ошибки

```bash
# Убедитесь, что типы сгенерированы
pnpm build:types

# Проверьте, что файл типов существует
ls dist/index.d.ts
```
