import { Box, Typography } from "@mui/material";
import React from "react";

function OneDetail({ title, content }) {
  //write code here

  return (
    <Box my={3}>
      <Typography component="p" variant="body1" color="text.secondary">
        {title}
      </Typography>
      {typeof content === "string" ? (
        <Typography component="div" variant="h6" ml={2.5} color="text.primary">
          {content}
        </Typography>
      ) : (
        content
      )}
    </Box>
  );
}

export default OneDetail;
