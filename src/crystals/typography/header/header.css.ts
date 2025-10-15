import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme.css";

export const h1Styles = style({
  fontSize: vars.fontSizes.h1,
  fontWeight: vars.fontWeights.bold,
  lineHeight: vars.lineHeights.h1,
});

export const h2Styles = style({
  fontSize: vars.fontSizes.h2,
  fontWeight: vars.fontWeights.bold,
  lineHeight: vars.lineHeights.h2,
});

export const h3Styles = style({
  fontSize: vars.fontSizes.h3,
  fontWeight: vars.fontWeights.medium,
  lineHeight: vars.lineHeights.h3,
});

export const h4Styles = style({
  fontSize: vars.fontSizes.h4,
  fontWeight: vars.fontWeights.medium,
  lineHeight: vars.lineHeights.h4,
});

export const h5Styles = style({
  fontSize: vars.fontSizes.h5,
  fontWeight: vars.fontWeights.normal,
  lineHeight: vars.lineHeights.h5,
});

export const h6Styles = style({
  fontSize: vars.fontSizes.h6,
  fontWeight: vars.fontWeights.normal,
  lineHeight: vars.lineHeights.h6,
});

export const headerVariants = {
  h1: h1Styles,
  h2: h2Styles,
  h3: h3Styles,
  h4: h4Styles,
  h5: h5Styles,
  h6: h6Styles,
};
