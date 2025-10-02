import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme.css";

export const h1 = style({
  fontSize: vars.fontSizes.h1,
  fontWeight: vars.fontWeights.bold,
  lineHeight: vars.lineHeights.h1,
});

export const h2 = style({
  fontSize: vars.fontSizes.h2,
  fontWeight: vars.fontWeights.bold,
  lineHeight: vars.lineHeights.h2,
});

export const h3 = style({
  fontSize: vars.fontSizes.h3,
  fontWeight: vars.fontWeights.medium,
  lineHeight: vars.lineHeights.h3,
});

export const h4 = style({
  fontSize: vars.fontSizes.h4,
  fontWeight: vars.fontWeights.medium,
  lineHeight: vars.lineHeights.h4,
});

export const h5 = style({
  fontSize: vars.fontSizes.h5,
  fontWeight: vars.fontWeights.normal,
  lineHeight: vars.lineHeights.h5,
});

export const h6 = style({
  fontSize: vars.fontSizes.h6,
  fontWeight: vars.fontWeights.normal,
  lineHeight: vars.lineHeights.h6,
});

export const headerVariants = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};
