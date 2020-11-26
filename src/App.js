import './App.css';
import React,{useState,useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Import components
import MovieList from './components/MovieList';
import FavoriteMovie from './components/FavoriteMovie';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/SearchBox';
import AddToFavorites from './components/AddToFavorites';

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

    const addFavoriteMovie = (movie) => {
      const newFavoriteList = [...favoriteMovie, movie];
      setFavoriteMovie(newFavoriteList);
    };
    
  useEffect(()=>{
    getData(searchValue);
  },[searchValue])


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
      <div className="row"> <MovieList movies={favoriteMovie} favoriteMovie={AddToFavorites} /> </div>
    </div>
  );
}

export default App;
