import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import wait from "../../../utils/wait";
import "./movie-card.css";

function MovieCard({ movieObject }) {
  //write code here
  const { shadows } = useTheme();
  const navigate = useNavigate();
  const { Title, Year, imdbID, Type, Poster } = movieObject;
  async function navigateToMovieDetails() {
    await wait(400);
    navigate(`/movie/${imdbID}`);
  }
  return (
    <CardActionArea className="movie-card" onClick={navigateToMovieDetails}>
      <Card
        sx={{
          position: "relative",
          height: "450px",
          ":hover": {
            boxShadow: shadows[5],
          },
        }}
      >
        <CardMedia
          image={Poster}
          alt="movie poster"
          component="img"
          sx={{
            height: "100%",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            bgcolor: "background.cardContent",
            zIndex: "1",
          }}
          className="movie-content"
        >
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            {Title}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {Type}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {Year}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

export default MovieCard;
