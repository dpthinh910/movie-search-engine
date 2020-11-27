import './App.css';
import React,{useState,useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Import components
import MovieList from './components/MovieList';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/SearchBox';
import AddToFavorites from './components/AddToFavorites';
import RemoveFavorites from './components/RemoveFavorites';

function App() {
  const [movies,setMovies] = useState([]);
  const [favoriteMovie,setFavoriteMovie] = useState([]);
  const [searchValue,setSearchValue] = useState('');

  //Fetch data once the page is loaded
  const getData = async (searchValue) => {
    const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=386a7963`;

    const requestData = await fetch(url);
    const jsonData = await requestData.json();
    if(jsonData.Search) {
      setMovies(jsonData.Search);
    }
  }
  //UseEffect : get json data once the page is loaded
      useEffect(()=>{
        getData(searchValue);
      },[searchValue]);

      useEffect(() => {
        const movieFavorites = JSON.parse(
          localStorage.getItem('movie-app')
          );
          if(movieFavorites){
          setFavoriteMovie(movieFavorites);
        }
      },[]);

  //Functions of the app
    const saveToLocalStorage = (items) => {
      localStorage.setItem('movie-app',JSON.stringify(items));
    }
    const addFavoriteMovie = (movie) => {
      const newFavoriteList = [...favoriteMovie, movie];
      setFavoriteMovie(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    };
    const removeFavorites = (movie) => {
      const newFavoriteList = favoriteMovie.filter((favorite) => favorite.imdbID !== movie.imdbID);
      setFavoriteMovie(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
  


  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
      <MovieHeading heading="Movies Search App" />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} favoriteMovie={AddToFavorites} handleClick={addFavoriteMovie} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeading heading="Favorite Movies" />
      </div>
      <div className="row"> <MovieList movies={favoriteMovie} handleClick={removeFavorites} favoriteMovie={RemoveFavorites} /> </div>
    </div>
  );
}

export default App;
