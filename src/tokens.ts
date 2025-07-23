import darken from "polished/lib/color/darken";

const breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
} as const;

const colors = {
  primary: "#78B64C",
  primaryHover: darken(0.05, "#78B64C"),
  secondary: "#3C3C3C",
  secondaryHover: darken(0.05, "#3C3C3C"),
  tertiary: "#EDEDED",
  tertiaryHover: darken(0.05, "#EDEDED"),
  white: "#FFFFFF",
  disabled: "#C2C2C2",
  whitesmoke: "#F5F5F5",
  transparent: "transparent",
} as const;

const spacings = {
  0: "0px",
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  10: "10px",
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  22: "22px",
  24: "24px",
  26: "26px",
  28: "28px",
  30: "30px",
  32: "32px",
} as const;

const fontWeights = {
  normal: "400",
  medium: "500",
  bold: "700",
} as const;

const fontSizes = {
  "2xl": "24px",
  xl: "20px",
  lg: "18px",
  md: "16px",
  sm: "14px",
  xs: "12px",
} as const;

const lineHeights = {
  "2xl": "2",
  xl: "1.75",
  lg: "1.5",
  md: "1.25",
  sm: "1",
} as const;

const fontFamilies = {
  manrope: `var(--font-manrope), Arial, sans-serif`,
  playfairDisplay: `var(--font-playfair-display), Arial, sans-serif`,
} as const;

export const tokens = {
  breakpoints,
  colors,
  spacings,
  fontWeights,
  fontSizes,
  lineHeights,
  fontFamilies,
} as const;
