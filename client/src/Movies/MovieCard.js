import React from 'react';
import { NavLink } from "react-router-dom";

const MovieCard = props => {
  return(
    <NavLink exact to={`/movie-list/${movie.id}`}>
    Movies
    </NavLink> 
  );
};

export default MovieCard;
