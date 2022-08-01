import { Stack, Switch, Typography } from "@mui/material";
import React from "react";

function SwitchTheme({ value, setValue }) {
  //write code here
  function switchValue() {
    setValue(prev => !prev);
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography color="text.primary">Light</Typography>
      <Switch checked={value} onChange={switchValue} />
      <Typography color="text.primary">Dark</Typography>
    </Stack>
  );
}

export default SwitchTheme;
