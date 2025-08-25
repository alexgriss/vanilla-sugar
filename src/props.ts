import { vars } from "./theme.css";

export const colorProps = {
  color: vars.colors,
  backgroundColor: vars.colors,
  borderColor: vars.colors,
} as const;

export const flexProps = {
  gap: vars.spacings,

  display: [
    "none",
    "inline",
    "block",
    "inline-block",
    "flex",
    "inline-flex",
    "grid",
    "inline-grid",
  ],
  flexDirection: ["column", "row"],
  alignItems: {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
  },
  justifyContent: {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
    between: "space-between",
    around: "space-around",
  },
  flexWrap: ["wrap"],
} as const;

export const fontProps = {
  fontFamily: vars.fontFamilies,
  fontWeight: vars.fontWeights,
  fontSize: vars.fontSizes,
  lineHeight: vars.lineHeights,

  fontStyle: ["normal", "italic"],
  textAlign: ["left", "center", "right", "justify"],
  textTransform: ["none", "uppercase", "lowercase", "capitalize"],
} as const;

export const spacingProps = {
  margin: vars.spacings,
  marginTop: vars.spacings,
  marginLeft: vars.spacings,
  marginRight: vars.spacings,
  marginBottom: vars.spacings,
  padding: vars.spacings,
  paddingTop: vars.spacings,
  paddingLeft: vars.spacings,
  paddingRight: vars.spacings,
  paddingBottom: vars.spacings,
  borderRadius: vars.spacings,
} as const;

export const sizeProps = {
  width: vars.sizes,
  height: vars.sizes,
  minWidth: vars.sizes,
  maxWidth: vars.sizes,
  minHeight: vars.sizes,
  maxHeight: vars.sizes,
} as const;
