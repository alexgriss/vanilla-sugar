import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { buttonSizes, buttonVariants } from "../types";

import { sprinkles } from "../../../sprinkles.css";
import { vars } from "../../../theme.css";

const disabledStyles = styleVariants({
  primary: {
    ":disabled": {
      backgroundColor: vars.colors.disabled,
      color: vars.colors.white,
      selectors: {
        "&:hover": {
          backgroundColor: vars.colors.disabled,
        },
      },
    },
  },
  secondary: {
    ":disabled": {
      backgroundColor: vars.colors.white,
      color: vars.colors.disabled,
      selectors: {
        "&:hover": {
          backgroundColor: vars.colors.white,
        },
      },
    },
  },
});

const baseButtonStyles = [
  style({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    selectors: {
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
  }),
  sprinkles({
    gap: 8,
  }),
];

const primaryStyles = [
  sprinkles({ bg: "primary", color: "white" }),
  disabledStyles.primary,
  style({
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.primaryHover,
      },
    },
  }),
];

const secondaryStyles = [
  sprinkles({ bg: "secondary", color: "white" }),
  disabledStyles.primary,
  style({
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.secondaryHover,
      },
    },
  }),
];

const ghostStyles = [
  sprinkles({ bg: "transparent", color: "secondary" }),
  disabledStyles.secondary,
];

const smallStyles = sprinkles({ p: 8, br: 8, fs: "xs" });
const mediumStyles = sprinkles({ p: 14, br: 12, fs: "sm" });
const largeStyles = sprinkles({ p: 16, br: 12, fs: "md" });

export const button = recipe({
  base: baseButtonStyles,
  variants: {
    variant: {
      [buttonVariants.primary]: primaryStyles,
      [buttonVariants.secondary]: secondaryStyles,
      [buttonVariants.ghost]: ghostStyles,
    },
    size: {
      [buttonSizes.small]: smallStyles,
      [buttonSizes.medium]: mediumStyles,
      [buttonSizes.large]: largeStyles,
    },
    onlyIcon: {
      false: {},
      true: {
        width: "max-content",
      },
    },
  },
  defaultVariants: {
    variant: buttonVariants.primary,
    size: buttonSizes.medium,
    onlyIcon: false,
  },
});

export const buttonIcon = recipe({
  base: {
    color: "currentColor",
  },
  variants: {
    size: {
      [buttonSizes.small]: {
        width: 16,
        height: 16,
      },
      [buttonSizes.medium]: {
        width: 20,
        height: 20,
      },
      [buttonSizes.large]: {
        width: 24,
        height: 24,
      },
    },
  },
  defaultVariants: {
    size: buttonSizes.medium,
  },
});
