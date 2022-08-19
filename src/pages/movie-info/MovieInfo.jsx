import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import useFetch from "../../Hooks/useFetch";
import MovieDetails from "./components/MovieDetails";
import MoviePoster from "./components/MoviePoster";
import { useParams } from "react-router-dom";
import { FavListContext } from "../../contexts/FavListContext";

function MovieInfo() {
  //write code here
  const { isLoading, error, performFetch } = useFetch();
  const { movieObject, setMovieObject, favList, setFavList } =
    useContext(FavListContext);
  const { movieId } = useParams();
  const [isFav, setIsFav] = useState(false);

  function removeAddToFavList() {
    //* check if this movie in the favList
    const IsMovieInFavList = favList.some(movie => movie.imdbID === movieId);
    if (IsMovieInFavList) {
      setIsFav(false);
      setFavList(prev => prev.filter(movie => movie.imdbID !== movieId));
    } else {
      setIsFav(true);
      setFavList(prev => [...prev, movieObject]);
    }
  }
  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`;
    performFetch(url).then(data => setMovieObject(data));

    const IsMovieInFavList = favList.some(movie => movie.imdbID === movieId);
    if (IsMovieInFavList) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }

    return () => setMovieObject(null);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMsg error={error} />}
      {movieObject && (
        <Box py={3}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={5}>
              <MoviePoster isFav={isFav} favFunc={removeAddToFavList} />
            </Grid>
            <Grid item md={7}>
              <MovieDetails isFav={isFav} favFunc={removeAddToFavList} />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default MovieInfo;
