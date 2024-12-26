import React from 'react';
import { Link } from 'react-router-dom';

// Reusable MovieCard component
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
