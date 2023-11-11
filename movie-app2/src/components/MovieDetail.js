import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const movies = movies.find((m) => m.id === parseInt(id, 10));

  if (!movies) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h2>{movies.title}</h2>
      <p>{movies.description}</p>
      <iframe
        title={movies.title}
        width="560"
        height="315"
        src={movies.trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
