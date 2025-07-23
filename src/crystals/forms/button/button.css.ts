import { recipe } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";

import { sprinkles } from "../../../sprinkles.css";
import { vars } from "../../../theme.css";

import { buttonSizes, buttonVariants } from "../types";

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
    fontWeight: "bold",
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

const tertiaryStyles = [
  sprinkles({ bg: "tertiary", color: "secondary" }),
  disabledStyles.primary,
  style({
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.tertiaryHover,
      },
    },
  }),
];

const whiteStyles = [
  sprinkles({ bg: "white", color: "secondary" }),
  disabledStyles.primary,
];

const outlineStyles = [
  sprinkles({ bg: "transparent", color: "secondary" }),
  disabledStyles.secondary,
  style({
    border: "1px solid",
    borderColor: vars.colors.tertiary,
  }),
  style({
    selectors: {
      "&:hover:not(:disabled)": {
        borderColor: vars.colors.tertiaryHover,
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
      [buttonVariants.tertiary]: tertiaryStyles,
      [buttonVariants.white]: whiteStyles,
      [buttonVariants.outline]: outlineStyles,
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
