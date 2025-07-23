import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "../../../sprinkles.css";

export const button = recipe({
  base: {
    display: "flex",
  },
  variants: {
    fd: {
      column: [sprinkles({ fd: "column" })],
      row: [sprinkles({ fd: "row" })],
    },
  },
  defaultVariants: {
    fd: "row",
  },
});
