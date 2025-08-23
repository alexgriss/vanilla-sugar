import clsx from "clsx";

import {
  cloneElement,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";

import { Box, type IBoxProps } from "../../layout";
import { type ButtonSize, type ButtonVariant } from "../types";

import { button, buttonIcon } from "./button.css";

export type IButtonProps = IBoxProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onlyIcon?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
};

export const Button = (props: IButtonProps) => {
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

export type IIconButtonProps = Omit<IButtonProps, "children" | "onlyIcon"> & {
  children: ReactElement;
};

export const IconButton = (props: IIconButtonProps) => {
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
