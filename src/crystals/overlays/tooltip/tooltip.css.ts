import { style } from "@vanilla-extract/css";
import { tokens } from "../../../tokens";

export const tooltipStyles = style({
  padding: `${tokens.spacings[2]} ${tokens.spacings[3]}`,
  backgroundColor: tokens.colors.textAccent,
  color: tokens.colors.neutralWhite,
  borderRadius: tokens.spacings[1],
  fontSize: tokens.fontSizes.sm,
  fontWeight: tokens.fontWeights.normal,
  lineHeight: tokens.lineHeights.body,
  display: "inline-block",
  width: "max-content",
  maxWidth: "200px",
  whiteSpace: "normal",
  overflowWrap: "anywhere",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
});

export const tooltipArrowStyles = style({
  position: "absolute",
  width: 0,
  height: 0,
  borderStyle: "solid",
});

export const tooltipArrowTopStyles = style({
  borderWidth: "4px 4px 0 4px",
  borderColor: `${tokens.colors.textAccent} transparent transparent transparent`,
});

export const tooltipArrowBottomStyles = style({
  borderWidth: "0 4px 4px 4px",
  borderColor: `transparent transparent ${tokens.colors.textAccent} transparent`,
});

export const tooltipArrowLeftStyles = style({
  borderWidth: "4px 0 4px 4px",
  borderColor: `transparent transparent transparent ${tokens.colors.textAccent}`,
});

export const tooltipArrowRightStyles = style({
  borderWidth: "4px 4px 4px 0",
  borderColor: `transparent ${tokens.colors.textAccent} transparent transparent`,
});
