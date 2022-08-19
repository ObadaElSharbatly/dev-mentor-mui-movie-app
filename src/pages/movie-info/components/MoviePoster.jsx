import React, { useContext } from "react";
import { Card, CardMedia, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavListContext } from "../../../contexts/FavListContext";

function MoviePoster({ isFav, favFunc }) {
  const { movieObject } = useContext(FavListContext);
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 3,
      }}
    >
      <Fab
        color="primary"
        aria-label="add"
        onClick={favFunc}
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
        }}
      >
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Fab>
      <CardMedia src={movieObject.Poster} />
    </Card>
  );
}

export default MoviePoster;
