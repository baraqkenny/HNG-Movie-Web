import { useState, useEffect } from 'react';
import axios from '../axios';
import { Link }  from 'react-router-dom'
import './Movies.css'


function Movies({ title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    const BASE_URL = "https://image.tmdb.org/t/p/w500";


    useEffect(()=> {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        console.log(request.data.results);
        setMovies(request.data.results)
        return request;
      }
      fetchData()
    },[fetchUrl])

  return (
    <div className="">
      <h2 className="title">{title}</h2>

      <div className="movie__poster__wrapper">
        {movies && movies.map((movie) => (
          <Link to={`/movie-details/${movie.id}`} key={movie.id} className='movie__posters'>
          <img className="movie__poster"
          src={`${BASE_URL}${movie.poster_path}`} 
          alt={movie.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies
