import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import useFetch from "../../Hooks/useFetch";
import MovieDetails from "./components/MovieDetails";
import MoviePoster from "./components/MoviePoster";
import { useParams } from "react-router-dom";

function MovieInfo() {
  //write code here
  const { isLoading, error, performFetch } = useFetch();
  const [movieObject, setMovieObject] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`;
    performFetch(url).then(data => setMovieObject(data));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMsg error={error} />}
      {movieObject && (
        <Box my={3}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={5}>
              <MoviePoster image={movieObject.Poster} />
            </Grid>
            <Grid item md={7}>
              <MovieDetails details={movieObject} />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default MovieInfo;
