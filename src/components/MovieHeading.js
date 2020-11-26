import React from 'react';
import MovieList from './MovieList';

const MovieHeading = (props) => {

  return (
    <div className="col">
      <h2>{props.heading}</h2>
    </div>
  );
}

export default MovieHeading;