import React from 'react';
import './MovieCard.css'; // Create a CSS file for styling

const MovieCard = ({ title, posterUrl }) => {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} className="movie-poster" />
      <p className="movie-title">{title}</p>
    </div>
  );
};

export default MovieCard;
