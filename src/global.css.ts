import { globalStyle } from "@vanilla-extract/css";

import "./fonts.css";
import "./reset.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  fontFamily: "var(--font-manrope) !important",
});

globalStyle("body:has(dialog[open])", {
  overflow: "hidden",
});
