import React from 'react';


const MovieList = (props) => {
  const FavoriteMovies = props.favoriteMovie;
  return (
    <>
    {props.movies.map((movie,index) => (
      <div className="image-container rounded d-flex p-4 justify-content-around">
        <img src={movie.Poster} alt="Loading..."></img>
        <div onClick={() => props.handleClick(movie)} className="overlay d-flex align-items-center justify-content-center"> 
        <FavoriteMovies />
        </div>
      </div>
    ))}
    </>
  );
}

export default MovieList;