import { cloneElement, type ElementType, type ReactElement, type ReactNode } from "react";

import clsx from "clsx";

import { Box, type BoxProps } from "../../layout";
import { type ButtonSize, type ButtonVariant } from "../types";

import { button, buttonIcon } from "./button.css";

export type ButtonProps = BoxProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onlyIcon?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
};

export const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    onlyIcon,
    className,
    children,
    leftIcon,
    rightIcon,
    ...restProps
  } = props;

  const variantClass = button({ variant, size, onlyIcon });

  const buttonProps = {
    ...restProps,
    as: "button" as ElementType,
    className: clsx(variantClass, className),
  };

  const buttonIconClass = buttonIcon({ size });

  return (
    <Box {...buttonProps}>
      {leftIcon &&
        cloneElement(leftIcon as ReactElement<{ className: string }>, {
          className: buttonIconClass,
        })}

      {children}

      {rightIcon &&
        cloneElement(rightIcon as ReactElement<{ className: string }>, {
          className: buttonIconClass,
        })}
    </Box>
  );
};

export type IconButtonProps = Omit<ButtonProps, "children" | "onlyIcon"> & {
  children: ReactElement;
};

export const IconButton = (props: IconButtonProps) => {
  const { size, children, ...restProps } = props;

  const buttonIconClass = buttonIcon({ size });

  return (
    <Button {...restProps} size={size} onlyIcon>
      {cloneElement(children as ReactElement<{ className: string }>, {
        className: buttonIconClass,
      })}
    </Button>
  );
};
