import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ErrorMsg from "../../../components/ErrorMsg";
import Loader from "../../../components/Loader";
import { SearchContext } from "../../../contexts/SearchContext";
import wait from "../../../utils/wait";
import MovieCard from "./MovieCard";

function FoundedMovies() {
  //write code here
  const { searchWord } = useContext(SearchContext);
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getMovies() {
    try {
      setIsLoading(true);
      setError(null);
      await wait(2000);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchWord}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovieList(data.Search);
      } else {
        setMovieList([]);
        setError(data.Error);
      }
    } catch (error) {
      console.log("error happened", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (searchWord) {
      getMovies();
    }
    // eslint-disable-next-line
  }, [searchWord]);

  return (
    <Box mt={3}>
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loader />}
      <Grid container spacing={2}>
        {movieList.map((movie, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <MovieCard movieObject={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FoundedMovies;
