import React from 'react';


const MovieList = ({movies}) => {
  return (
    <>
    {movies.map((movie,index) => (
      <div className="image-container rounded d-flex p-4 justify-content-around">
        <img src={movie.Poster} alt="movie"></img>
      </div>
    ))}
    </>
  );
}

export default MovieList;