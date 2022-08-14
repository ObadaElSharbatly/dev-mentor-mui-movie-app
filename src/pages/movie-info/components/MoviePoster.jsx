import React from "react";
import { Card, CardMedia, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MoviePoster({ image }) {
  //write code here
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
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
        }}
      >
        <FavoriteBorderIcon />
      </Fab>
      <CardMedia image={image} component="img" />
    </Card>
  );
}

export default MoviePoster;
