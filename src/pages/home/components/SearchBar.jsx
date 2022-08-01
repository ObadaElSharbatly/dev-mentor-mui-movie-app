import { Box, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  //write code here

  return (
    <Box sx={{ display: " flex", alignItems: "flex-end" }}>
      <SearchIcon fontSize="large" sx={{ mr: 2 }} color="primary" />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        color="primary"
        fullWidth
      />
    </Box>
  );
}

export default SearchBar;
