import darken from "polished/lib/color/darken";

const breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  xxl: "96em",
} as const;

const colors = {
  primaryBase: "#3ca1f5",
  primaryHover: darken(0.05, "#3ca1f5"),
  primaryActive: darken(0.1, "#3ca1f5"),
  secondaryBase: "#edf2f6",
  secondaryHover: darken(0.05, "#edf2f6"),
  secondaryActive: darken(0.1, "#edf2f6"),
  tertiaryBase: "#97a5ba",
  tertiaryHover: darken(0.05, "#97a5ba"),
  tertiaryActive: darken(0.1, "#97a5ba"),
  neutralWhite: "#FFFFFF",
  neutralTransparent: "transparent",
  borderBase: "#e8eaee",
  stateDisabled: "#C2C2C2",
  bgPrimary: "#f6f7f9",
  bgSecondary: "#f0f0f0",
  textDisabled: "#686c7c",
  textAccent: "#0A0D1C",
  codeEditorGutters: "#000000",
} as const;

const spacings = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
} as const;

const fontFamilies = {
  PTSans: "'PT Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

const fontWeights = {
  light: "300",
  normal: "400",
  medium: "500",
  bold: "700",
  black: "900",
} as const;

const fontSizes = {
  xxs: "0.625rem", // 10px
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "2rem", // 32px
  "4xl": "2.5rem", // 40px
  "5xl": "3rem", // 48px
  "6xl": "4rem", // 64px

  h1: "1.75rem", // 28px
  h2: "1.375rem", // 22px
  h3: "1.125rem", // 18px
  h4: "1rem", // 16px
  h5: "0.875rem", // 14px
  h6: "0.75rem", // 12px
} as const;

const lineHeights = {
  body: "1.6",
  h1: "1.3",
  h2: "1.35",
  h3: "1.4",
  h4: "1.4",
  h5: "1.4",
  h6: "1.4",
} as const;

const sizes = {
  // Icons
  iconSm: "1rem", // 16px
  iconMd: "1.5rem", // 24px
  iconLg: "2rem", // 32px

  // Layout widths
  containerSm: "30rem", // 480px
  containerMd: "48rem", // 768px
  containerLg: "64rem", // 1024px
  containerXl: "80rem", // 1280px

  // Specials
  full: "100%",
  screenW: "100vw",
  screenH: "100vh",
  auto: "auto",
  fit: "fit-content",
  max: "max-content",
  min: "min-content",
} as const;

export const tokens = {
  breakpoints,
  colors,
  spacings,
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  sizes,
} as const;
