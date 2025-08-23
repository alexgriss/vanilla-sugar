# Vanilla Sugar

A modern, type-safe UI component library built with React and Vanilla Extract. Vanilla Sugar provides a comprehensive design system with atomic CSS utilities, responsive components, and a clean API for building consistent user interfaces.

## 🚀 Features

- **Type-Safe Styling**: Built with Vanilla Extract for zero-runtime CSS-in-JS
- **Atomic Design**: Modular component architecture with reusable crystals
- **Responsive Design**: Built-in responsive utilities and breakpoints
- **Design Tokens**: Consistent spacing, colors, typography, and layout system
- **Modern React**: Built with React 19 and TypeScript
- **Zero Runtime**: CSS is extracted at build time for optimal performance
- **Storybook Integration**: Component documentation and development
- **SVG Support**: Import SVG files as React components
- **Code Quality**: ESLint + Prettier for consistent code style

## 🛠 Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development experience
- **Vanilla Extract** - Zero-runtime CSS-in-JS with type safety
- **Sprinkles** - Atomic CSS utility system
- **Vite** - Fast build tool and development server
- **Storybook 9** - Component development and documentation
- **ESLint + Prettier** - Code quality and formatting
- **SVGR** - SVG as React components
- **Polished** - Color manipulation utilities
- **CLSX** - Conditional className utility

## 📦 Installation

> **Note**: This package is currently in development and not yet published to npm.

```bash
# Clone the repository
git clone https://github.com/your-username/vanilla-sugar.git
cd vanilla-sugar

# Install dependencies
npm install
```

## 🎯 Usage

### Basic Components

```tsx
import { Box, Button, Text, HStack, VStack } from "vanilla-sugar";

function App() {
  return (
    <VStack gap="16" p="24">
      <Text fontSize="xl" fontWeight="bold">
        Welcome to Vanilla Sugar
      </Text>

      <HStack gap="12">
        <Button variant="primary" size="md">
          Primary Button
        </Button>

        <Button variant="secondary" size="md">
          Secondary Button
        </Button>
      </HStack>
    </VStack>
  );
}
```

### Layout Components

```tsx
import { Box, Flex, Center, HStack, VStack } from 'vanilla-sugar';

// Flexible container
<Flex direction="row" alignItems="center" justifyContent="space-between">
  <Box>Left content</Box>
  <Box>Right content</Box>
</Flex>

// Centered content
<Center>
  <Text>Centered text</Text>
</Center>

// Horizontal stack
<HStack gap="16" alignItems="center">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</HStack>

// Vertical stack
<VStack gap="12">
  <Text>Top item</Text>
  <Text>Bottom item</Text>
</VStack>
```

### Typography

```tsx
import { Text } from 'vanilla-sugar';

<Text fontSize="lg" fontWeight="bold" color="primary">
  Large bold text
</Text>

<Text fontSize="md" lineHeight="1.5">
  Regular paragraph text with good line height
</Text>
```

### Buttons with Icons

```tsx
import { Button, IconButton } from 'vanilla-sugar';
import SearchIcon from './search-icon.svg?react';

<Button leftIcon={<SearchIcon width={20} height={20} />} variant="primary">
  Add Item
</Button>

<IconButton size="md">
  <SearchIcon width={20} height={20} />
</IconButton>
```

## 🎨 Design System

### Colors

- `primary` - Main brand color (#78B64C)
- `secondary` - Secondary color (#3C3C3C)
- `tertiary` - Light background (#EDEDED)
- `white` - Pure white (#FFFFFF)
- `disabled` - Disabled state (#C2C2C2)

### Spacing Scale

- `0` to `32` - Consistent spacing values in pixels
- Responsive utilities for mobile, tablet, and desktop

### Typography tokens

- **Font Families**: Manrope (Google Fonts)
- **Font Sizes**: xs (12px) to 2xl (24px)
- **Font Weights**: normal (400), medium (500), bold (700)
- **Line Heights**: sm (1) to 2xl (2)

### Breakpoints

- `mobile`: 0em - 768px
- `tablet`: 768px - 1024px
- `desktop`: 1024px+

## 🏗 Project Structure

```text
src/
├── crystals/           # 🧩 UI Components (new components will be added ❗)
│   ├── forms/         # Form components (Button, IconButton, etc.)
│   ├── layout/        # Layout components (Box, Flex, Center, HStack, VStack)
│   └── typography/    # Text components
├── tokens.ts          # Design tokens (colors, spacing, etc.)
├── theme.css.ts       # CSS variables and theme
├── sprinkles.css.ts   # Atomic CSS utilities
├── props.ts           # Type definitions for props
├── global.css.ts      # Global styles and fonts
├── reset.css.ts       # CSS reset
├── utilities.css.ts   # Utility styles
├── extract-sprinkles-props.ts # Sprinkles props extraction
└── index.ts           # Main exports
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting and formatting
npm run lint
npm run lint:fix
npm run format
npm run format:check

# Storybook
npm run storybook
npm run build-storybook
```

---

Built with ❤️ using modern web technologies by Aleksandr Grigorenko
