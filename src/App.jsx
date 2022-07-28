import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";

function App() {
  return (
    <>
      <Header />
      <Container component="main">
        <SwitchTheme />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
