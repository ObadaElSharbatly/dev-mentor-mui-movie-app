import { Stack, Switch, Typography } from "@mui/material";
import React from "react";

function SwitchTheme({ value, setValue }) {
  //write code here
  function switchTheValue() {
    setValue(prev => !prev);
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center" my={2}>
      <Typography color="text.primary">Light</Typography>
      <Switch checked={value} onChange={switchTheValue} />
      <Typography color="text.primary">Dark</Typography>
    </Stack>
  );
}

export default SwitchTheme;
