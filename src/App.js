import './App.css';
import React,{useState,useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Import components
import MovieList from './components/MovieList';
import FavoriteMovie from './components/FavoriteMovie';

function App() {
  const [movies,setMovies] = useState([]);
  const [favoriteMovie,setFavoriteMovie] = useState([]);
  const [searchValue,setSearchValue] = useState('');

  //Fetch data once the page is loaded
  const getData = async (searchValue) => {
    const url ="http://www.omdbapi.com/?s=john wick&apikey=386a7963";

    const requestData = await fetch(url);
    const jsonData = await requestData.json();
    if(jsonData.Search) {
      setMovies(jsonData.Search);
    }
  }
  useEffect(()=>{
    getData(searchValue);
  },[searchValue])


  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
      <div className="">

      </div>
    </div>
  );
}

export default App;
