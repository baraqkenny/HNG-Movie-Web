import { useState, useEffect } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";
import "./Movies.css";

function Movies({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    setLoadingMovies(false);
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movie__result__wrapper">
      <h2 className="title">{title}</h2>

      <div className="movie__poster__wrapper">
        {loadingMovies ? (
          <div className="loading__movies"></div>
        ) : (
          movies &&
          movies.map((movie) => (
            <Link
              to={`/movie-details/${movie.id}`}
              key={movie.id}
              className="movie__posters"
            >
              <img
                className="movie__poster"
                src={`${BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Movies;
