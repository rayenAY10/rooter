import React from 'react';
import { Link } from 'react-router-dom';
const movies = {}
const Home = () => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
