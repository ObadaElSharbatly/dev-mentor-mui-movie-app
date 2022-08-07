import { Box } from "@mui/material";
import React from "react";
import FoundedMovies from "./components/FoundedMovies";
import SearchBar from "./components/SearchBar";

function HomePage() {
  //write code here

  return (
    <Box>
      <SearchBar />
      <FoundedMovies />
    </Box>
  );
}

export default HomePage;
