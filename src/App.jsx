import { Box, ThemeProvider, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  //write code here
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeObject = useTheme();
  useEffect(() => {
    console.log(themeObject.palette);
  }, [isDarkMode]);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box bgcolor="background.body" minHeight="100vh">
        <Header />
        <Container component="main" sx={{ mt: 3 }}>
          <SwitchTheme value={isDarkMode} setValue={setIsDarkMode} />
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
