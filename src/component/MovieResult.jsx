import { useEffect, useState} from "react";
import { Link } from "react-router-dom"; 
import './MovieResult.css';

function MovieResult() {
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ movieDetails, setMovieDetails ] = useState([])

  
  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGZkMGFmOWEzNjRlNDVmZjY1NmZiMGNiMGEwOGM4MCIsInN1YiI6IjYzMjg4MDgxMGMxMjU1MDA3ZDI5ODE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JqwWU2ubIxC4jf-HE3r_zC5KQcUzVlFDe17Et6rXmfg',
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated",
          options
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data.results.slice(0, 10));
        setMovies(data.results.slice(0, 10));
        setLoading(false);
        setMovieDetails(movieDetails)
      } catch (error) {
        console.error("An error occurred:", error);
      }

      
   
    }

    fetchData();
  }, []);

  // return <div>Fetching movie data...</div>;

  // Get the movie poster
   const BASE_URL = "https://image.tmdb.org/t/p/w500";


  return (
    <div className="movie-result-container">
      <div className="movie-header">
        <h2>Featured Movie</h2>
        <p>See More</p>
      </div>

      <div className="movie-box">
        {loading ? (
          <h1>loading</h1>
        ) : (
          movies.map((movie) => (
            <Link
              data-testid="movie-card"
              className="movie-wrapper"
              key={movie.id}
              to={`/movie-details/${movie.id}`}
            >
              <img
                className="movie-poster"
                data-testid=" movie-poster"
                src={BASE_URL + movie.poster_path}
                alt=""
              />
              <p className="movie-year" data-testid="movie-release-date">
                {movie.release_date}
              </p>
              <h3
                data-testid="data-testid: movie-title"
                className="movie-title"
              >
                {movie.title}
              </h3>
              <div className="movie-rating">
                <div className="imdb-wrap">
                  <img src="./imdb-logo.png" alt="" />
                  <p>86.0/100</p>
                </div>
                <div className="fruit-wrap">
                  <img src="./PngItem_1381056 1.png" alt="" />
                  <p>90%</p>
                </div>
              </div>
              <p className="movie-genre">Action, Adventure, Horror</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default MovieResult;
