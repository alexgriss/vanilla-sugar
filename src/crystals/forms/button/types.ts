import type { ReactElement, ReactNode } from "react";
import type { IBoxProps } from "../../layout";

export const buttonVariants = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  white: "white",
} as const;

export type ButtonVariant =
  (typeof buttonVariants)[keyof typeof buttonVariants];

export const buttonSizes = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

export type ButtonSize = (typeof buttonSizes)[keyof typeof buttonSizes];

/**
 * Primary button component props
 */
export interface IButtonProps extends IBoxProps<"button"> {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Preset size for padding, font and icon */
  size?: ButtonSize;
  /** Renders button with icon-only spacing and styles */
  onlyIcon?: boolean;
  /** Click handler for the button */
  onClick?: () => void;
  /** Disables button interactions and applies disabled styles */
  disabled?: boolean;
  /** Optional icon rendered to the left of label */
  leftIcon?: ReactNode;
  /** Optional icon rendered to the right of label */
  rightIcon?: ReactNode;
  /** Button text or custom content */
  children?: ReactNode;
}

/**
 * Icon-only button props
 *
 * Usage: provides an icon as children; spacing is adjusted for icon-only layout
 */
export type IIconButtonProps = Omit<IButtonProps, "children" | "onlyIcon"> & {
  /** A single icon element to render inside the button */
  children: ReactElement;
};
