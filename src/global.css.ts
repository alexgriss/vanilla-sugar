import "./reset.css";

import { globalStyle } from "@vanilla-extract/css";

import { fontVars } from "./fonts.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  fontFamily: `${fontVars.IBMPlexSans} !important`,
});

globalStyle("body:has(dialog[open])", {
  overflow: "hidden",
});
