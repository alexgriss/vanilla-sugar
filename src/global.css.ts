import "./reset.css";

import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  fontFamily: `${vars.fontFamilies.PTSans} !important`,
});

globalStyle("body:has(dialog[open])", {
  overflow: "hidden",
});
