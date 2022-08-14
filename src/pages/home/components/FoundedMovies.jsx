import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ErrorMsg from "../../../components/ErrorMsg";
import Loader from "../../../components/Loader";
import { SearchContext } from "../../../contexts/SearchContext";
import useFetch from "../../../Hooks/useFetch";
import MovieCard from "./MovieCard";

function FoundedMovies() {
  //write code here
  const { searchWord, movieList, setMovieList } = useContext(SearchContext);

  const { isLoading, error, performFetch } = useFetch();

  useEffect(() => {
    if (searchWord) {
      const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchWord}`;
      performFetch(url).then(data => {
        if (data) setMovieList(data.Search);
      });
    }
    // eslint-disable-next-line
  }, [searchWord]);

  useEffect(() => {
    if (error) {
      setMovieList([]);
    }
    // eslint-disable-next-line
  }, [error]);

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
