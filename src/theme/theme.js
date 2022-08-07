import { createTheme } from "@mui/material";
import { darkModePalette, lightModePalette } from "./palette";
import { darkShadows, lightShadows } from "./shadows";

export const lightTheme = createTheme({
  palette: lightModePalette,
  shadows: darkShadows,
});

export const darkTheme = createTheme({
  palette: darkModePalette,
  shadows: lightShadows,
});
