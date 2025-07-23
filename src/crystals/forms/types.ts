export const buttonVariants = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  white: "white",
  outline: "outline",
  ghost: "ghost",
} as const;

export type ButtonVariant =
  (typeof buttonVariants)[keyof typeof buttonVariants];

export const buttonSizes = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

export type ButtonSize = (typeof buttonSizes)[keyof typeof buttonSizes];
