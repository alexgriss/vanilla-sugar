import { createVar, globalStyle } from "@vanilla-extract/css";

// CSS переменные для шрифтов
export const fontVars = {
  IBMPlexSans: createVar(),
} as const;

// Установка CSS-переменных для шрифтов
globalStyle(":root", {
  vars: {
    [fontVars.IBMPlexSans]: "'IBM Plex Sans', sans-serif",
  },
});
