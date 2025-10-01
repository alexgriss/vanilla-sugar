import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "../../../sprinkles.css";
import { vars } from "../../../theme.css";
import { buttonSizes, buttonVariants } from "../types";

const disabledStyles = styleVariants({
  primary: {
    ":disabled": {
      backgroundColor: vars.colors.stateDisabled,
      color: vars.colors.neutralWhite,
      selectors: {
        "&:hover": {
          backgroundColor: vars.colors.stateDisabled,
        },
      },
    },
  },
  secondary: {
    ":disabled": {
      backgroundColor: vars.colors.neutralWhite,
      color: vars.colors.stateDisabled,
      selectors: {
        "&:hover": {
          backgroundColor: vars.colors.neutralWhite,
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
  sprinkles({ bg: "primaryBase", color: "neutralWhite" }),
  disabledStyles.primary,
  style({
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.primaryHover,
      },
      "&:active:not(:disabled)": {
        backgroundColor: vars.colors.primaryActive,
      },
    },
  }),
];

const secondaryStyles = [
  sprinkles({ bg: "secondaryBase", color: "tertiaryBase" }),
  disabledStyles.primary,
  style({
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.secondaryHover,
      },
      "&:active:not(:disabled)": {
        backgroundColor: vars.colors.secondaryActive,
      },
    },
  }),
];

const tertiaryStyles = [
  sprinkles({ bg: "tertiaryBase", color: "neutralWhite" }),
  disabledStyles.secondary,
  style({
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.tertiaryHover,
      },
      "&:active:not(:disabled)": {
        backgroundColor: vars.colors.tertiaryActive,
      },
    },
  }),
];

const smallStyles = sprinkles({ p: 2, br: 2, fs: "sm" });
const mediumStyles = sprinkles({ p: 3, br: 3, fs: "md" });
const largeStyles = sprinkles({ p: 4, br: 3, fs: "lg" });

export const button = recipe({
  base: baseButtonStyles,
  variants: {
    variant: {
      [buttonVariants.primary]: primaryStyles,
      [buttonVariants.secondary]: secondaryStyles,
      [buttonVariants.tertiary]: tertiaryStyles,
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
