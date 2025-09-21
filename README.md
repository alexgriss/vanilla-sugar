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
    <VStack spacing={16} p={24}>
      <Text fs="xl" fw="bold">
        Welcome to Vanilla Sugar
      </Text>

      <HStack spacing={12}>
        <Button variant="primary" size="medium">
          Primary Button
        </Button>

        <Button variant="secondary" size="medium">
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
<Flex fd="row" ai="center" jc="between">
  <Box>Left content</Box>
  <Box>Right content</Box>
</Flex>

// Centered content
<Center>
  <Text>Centered text</Text>
</Center>

// Horizontal stack
<HStack spacing={16} ai="center">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</HStack>

// Vertical stack
<VStack spacing={12}>
  <Text>Top item</Text>
  <Text>Bottom item</Text>
</VStack>

// With sizes
<Box w={192} h={96} bg="tertiary" p={16}>
  <Text>192x96 container</Text>
</Box>

// Responsive sizes
<Box
  w={{ mobile: 96, tablet: 192, desktop: 256 }}
  h={{ mobile: 48, tablet: 96, desktop: 128 }}
  bg="primary"
>
  <Text color="white">Responsive container</Text>
</Box>
```

### Sizing

```tsx
import { Box, Flex } from 'vanilla-sugar';

// Fixed sizes
<Box w={192} h={96} bg="tertiary">
  Fixed size container
</Box>

// Responsive sizes
<Box
  w={{ mobile: 96, tablet: 192, desktop: 256 }}
  h={{ mobile: 48, tablet: 96, desktop: 128 }}
  bg="primary"
>
  Responsive container
</Box>

// Special values
<Box w="full" h="auto">Full width</Box>
<Box w="fit" h="screen">Fit content, full height</Box>

// Min/Max constraints
<Box minW={128} maxW={256} w="full">
  Constrained width
</Box>
```

### Typography

```tsx
import { Text } from 'vanilla-sugar';

<Text fs="lg" fw="bold" color="primary">
  Large bold text
</Text>

<Text fs="md" lh="lg">
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

<IconButton size="medium">
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

### Size Scale

- `0` to `256` - Consistent size values in pixels (0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 40, 48, 56, 64, 80, 96, 128, 160, 192, 224, 256)
- Special values: `auto`, `full` (100%), `screen` (100vw), `min` (min-content), `max` (max-content), `fit` (fit-content)
- Responsive utilities for mobile, tablet, and desktop

### Button Variants

- `primary` - Primary brand color
- `secondary` - Secondary color
- `tertiary` - Light background
- `white` - White background
- `outline` - Outlined style
- `ghost` - Transparent background

### Button Sizes

- `small` - Small button
- `medium` - Medium button (default)
- `large` - Large button

### Typography tokens

- **Font Families**: Manrope (Google Fonts)
- **Font Sizes**: xs (12px) to 2xl (24px)
- **Font Weights**: normal (400), medium (500), bold (700)
- **Line Heights**: sm (1) to 2xl (2)

### Breakpoints

- `mobile`: 0em - 768px
- `tablet`: 768px - 1024px
- `desktop`: 1024px+

### Available Props

All components support these atomic CSS props:

**Spacing**: `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr`, `m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr`
**Typography**: `fs` (fontSize), `fw` (fontWeight), `ff` (fontFamily), `lh` (lineHeight), `ta` (textAlign)
**Colors**: `color`, `bg` (backgroundColor), `bc` (borderColor)
**Layout**: `gap`, `fd` (flexDirection), `ai` (alignItems), `jc` (justifyContent), `br` (borderRadius)
**Sizes**: `w` (width), `h` (height), `minW` (minWidth), `maxW` (maxWidth), `minH` (minHeight), `maxH` (maxHeight)

**Responsive**: All props support responsive variants: `mobile`, `tablet`, `desktop`

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
