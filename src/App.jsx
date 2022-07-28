import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";

function App() {
  //write code here

  return (
    <>
      <Header />
      <Container>
        <SwitchTheme />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
