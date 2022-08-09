import { Box } from "@mui/material";
import React from "react";
import { SearchContextProvider } from "../../contexts/SearchContext";
import FoundedMovies from "./components/FoundedMovies";
import SearchBar from "./components/SearchBar";

function HomePage() {
  //write code here

  return (
    <Box>
      <SearchContextProvider>
        <SearchBar />
        <FoundedMovies />
      </SearchContextProvider>
    </Box>
  );
}

export default HomePage;
