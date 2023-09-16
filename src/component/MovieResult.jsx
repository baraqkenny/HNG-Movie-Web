import { useEffect, useState} from "react";
import { Link } from "react-router-dom"; 
import './MovieResult.css';

function MovieResult() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ movieDetails, setMovieDetails ] = useState([])
  const [favorite, setFavorite] = useState(false)

  const handleFavorite = ()=> {
    setFavorite(!false)
  }


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

  

  // Get the movie poster
   const BASE_URL = "https://image.tmdb.org/t/p/w500";


  return (
    <div className="movie-result-container">
      <div className="movie-header">
        <h2>Featured Movie</h2>
        <div className="see-more">
          <p> See More </p>
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>

      <div className="movie-box">
        {loading ? (
          <div className="loader"></div>
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
                alt="movie.title"
              />
              <i className= "bx bxs-heart"></i>
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

      <footer className="footer">
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
      </footer>
    </div>
  );
}

export default MovieResult;
