import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Favorite from "./api/FavoriteMovie";
import "./MovieResult.css";
import Trending from "./api/Trending";

function MovieResult() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);

  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGZkMGFmOWEzNjRlNDVmZjY1NmZiMGNiMGEwOGM4MCIsInN1YiI6IjYzMjg4MDgxMGMxMjU1MDA3ZDI5ODE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JqwWU2ubIxC4jf-HE3r_zC5KQcUzVlFDe17Et6rXmfg",
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
        setMovies(data.results);
        setLoading(false);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchData();
  }, []);

  // Get the movie poster

  return (
    <div className="movie-result-container">
      <h1 className="top-rated-movie">Top Rated</h1>
      <div className="movie-box">
        {movies.map((movie) => (
          <div className="movie-wrapper" key={movie.id}>
            <img
              className="movie-poster"
              src={BASE_URL + movie?.poster_path}
              alt={movie?.title}
            />
          </div>
        ))}
        
      </div>
          <Favorite />
          <Trending />
      {/* <footer className="footer">
        <div className="footer-icon">
          <i className="bx bxl-facebook-square"></i>
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-youtube"></i>
        </div>
        <div className="terms">
          <h3>Condition of Use</h3>
          <h3>Privacy & Policy</h3>
          <h3>Press Room</h3>
        </div>
        <div className="copyright">
          <h3>&copy;MovieBox by Adriana Eka Prayudha</h3>
        </div>
      </footer> */}
    </div>
  );
}

export default MovieResult;
