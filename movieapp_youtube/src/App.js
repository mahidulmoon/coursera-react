import React,{useEffect,useState} from 'react';
import './App.css';
import Movie from './Components/Movie';
import axios from 'axios';

const FEATURED_Api = "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const Search_api = "http://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [ movies,setMovies ] = useState([]);
  const [ searchvalue,setSearchvalue] = useState('');
  useEffect(() => {
    axios.get(FEATURED_Api).then(res => setMovies(res.data.results)).catch(err => console.log('error to featured api'));
  },[])

  const handleonSubmit = (e) =>{
    e.preventDefault();
    axios.get(Search_api+searchvalue).then(res => setMovies(res.data.results)).catch(err => console.log("error to get search result"));
  }
  const inputChange = (e) =>{
    setSearchvalue(e.target.value);
  }
  return (
    <>
    <header>
        <form onSubmit={handleonSubmit}>
          <input className="search" type="text" placeholder="search" onChange={inputChange} value={searchvalue} />
        </form>
      </header>
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
    </>
  );
}

export default App;
