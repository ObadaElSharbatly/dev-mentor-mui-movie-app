import { Stack, Switch, Typography } from "@mui/material";
import React from "react";

function SwitchTheme() {
  //write code here
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Light</Typography>
      <Switch />
      <Typography>Dark</Typography>
    </Stack>
  );
}

export default SwitchTheme;
