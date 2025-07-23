# Vanilla Sugar

A modern, type-safe UI component library built with React and Vanilla Extract. Vanilla Sugar provides a comprehensive design system with atomic CSS utilities, responsive components, and a clean API for building consistent user interfaces.

## 🚀 Features

- **Type-Safe Styling**: Built with Vanilla Extract for zero-runtime CSS-in-JS
- **Atomic Design**: Modular component architecture with reusable crystals
- **Responsive Design**: Built-in responsive utilities and breakpoints
- **Design Tokens**: Consistent spacing, colors, typography, and layout system
- **Modern React**: Built with React 19 and TypeScript
- **Zero Runtime**: CSS is extracted at build time for optimal performance

## 🛠 Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development experience
- **Vanilla Extract** - Zero-runtime CSS-in-JS with type safety
- **Sprinkles** - Atomic CSS utility system
- **Vite** - Fast build tool and development server
- **Polished** - Color manipulation utilities
- **CLSX** - Conditional className utility

## 📦 Installation

```bash
npm install vanilla-sugar
```

## 🎯 Usage

### Basic Components

```tsx
import { Box, Button, Text, HStack, VStack } from 'vanilla-sugar';

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
import { Icon } from 'your-icon-library';

<Button leftIcon={<Icon name="plus" />} variant="primary">
  Add Item
</Button>

<IconButton size="md">
  <Icon name="settings" />
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

- **Font Families**: Manrope, Playfair Display
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
├── crystals/           # UI Components
│   ├── forms/         # Form components (Button, etc.)
│   ├── layout/        # Layout components (Box, Flex, etc.)
│   └── typography/    # Text components
├── hooks/             # Custom React hooks
├── tokens.ts          # Design tokens (colors, spacing, etc.)
├── sprinkles.css.ts   # Atomic CSS utilities
├── props.ts           # Type definitions for props
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

# Run linting
npm run lint
```

---

Built with ❤️ using modern web technologies by Aleksandr Grigorenko
