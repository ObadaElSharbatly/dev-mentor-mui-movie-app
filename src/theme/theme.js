import { createTheme } from "@mui/material";
import { darkModePalette, lightModePalette } from "./palette";
import { darkShadows, lightShadows } from "./shadows";
import DefaultProps from "./DefaultProps";

export const lightTheme = createTheme({
  palette: lightModePalette,
  shadows: darkShadows,
  components: DefaultProps,
});

export const darkTheme = createTheme({
  palette: darkModePalette,
  shadows: lightShadows,
  components: DefaultProps,
});
