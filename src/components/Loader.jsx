import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";
function Loader() {
  //write code here

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}

export default Loader;
