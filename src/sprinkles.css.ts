import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { colorProps, flexProps, fontProps, spacingProps } from "./props";

const colorProperties = defineProperties({
  properties: colorProps,
  shorthands: {
    bg: ["backgroundColor"],
    bc: ["borderColor"],
  },
});

const fontProperties = defineProperties({
  properties: fontProps,
  shorthands: {
    fw: ["fontWeight"],
    fs: ["fontSize"],
    ff: ["fontFamily"],
    lh: ["lineHeight"],
    ta: ["textAlign"],
    tt: ["textTransform"],
  },
});

const responsiveProperties = defineProperties({
  properties: {
    ...spacingProps,
    ...flexProps,
  },
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  shorthands: {
    p: ["padding"],
    pr: ["paddingRight"],
    pl: ["paddingLeft"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],

    m: ["margin"],
    mr: ["marginRight"],
    ml: ["marginLeft"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],

    br: ["borderRadius"],

    fd: ["flexDirection"],
    ai: ["alignItems"],
    jc: ["justifyContent"],
  },
});

export const sprinkles = createSprinkles(
  colorProperties,
  fontProperties,
  responsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
