import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/movie-info/MovieInfo";
import HomePage from "./pages/home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MovieInfo />} />
      </Route>
    </Routes>
  </Router>
);
