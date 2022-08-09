import { Alert } from "@mui/material";
import React from "react";

function ErrorMsg({ error }) {
  //write code here

  return <Alert severity="error">{error}</Alert>;
}

export default ErrorMsg;
