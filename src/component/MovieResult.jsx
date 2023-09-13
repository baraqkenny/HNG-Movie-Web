import { useEffect, useState} from "react";
import bg from '../assets/bg.jpg'
import './MovieResult.css';

function MovieResult() {
  const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

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
        console.log(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchData();
  }, []);

  // return <div>Fetching movie data...</div>;

  return (
    <div className="movie-result-container">
      <div className="movie-header">
        <h2>Featured Movie</h2>
        <p>See More</p>
      </div>

      <div className="movie-wrapper">
        <div className="movie-card" data-testid="movie-card">
          <img
            className="movie-poster"
            data-testid=" movie-poster"
            src={bg}
            alt=""
          />
          <p className="movie-year" data-testid="movie-release-date">
            usa, 2016 - Current
          </p>
          <h3 data-testid="data-testid: movie-title" className="movie-title">
            Stranger Things
          </h3>
          <div>
            <p>86.0/100</p>
            <p>90%</p>
          </div>
          <p className="movie-genre">Action, Adventure, Horror</p>

          <img className="movie-poster" src={bg} alt="" />
          <p className="movie-year">usa, 2016 - Current</p>
          <h3 className="movie-title">Stranger Things</h3>
          <div>
            <p>86.0/100</p>
            <p>90%</p>
          </div>
          <p className="movie-genre">Action, Adventure, Horror</p>

          <img className="movie-poster" src={bg} alt="" />
          <p className="movie-year">usa, 2016 - Current</p>
          <h3 className="movie-title">Stranger Things</h3>
          <div>
            <p>86.0/100</p>
            <p>90%</p>
          </div>
          <p className="movie-genre">Action, Adventure, Horror</p>

          <img className="movie-poster" src={bg} alt="" />
          <p className="movie-year">usa, 2016 - Current</p>
          <h3 className="movie-title">Stranger Things</h3>
          <div>
            <p>86.0/100</p>
            <p>90%</p>
          </div>
          <p className="movie-genre">Action, Adventure, Horror</p>

          <img className="movie-poster" src={bg} alt="" />
          <p className="movie-year">usa, 2016 - Current</p>
          <h3 className="movie-title">Stranger Things</h3>
          <div>
            <p>86.0/100</p>
            <p>90%</p>
          </div>
          <p className="movie-genre">Action, Adventure, Horror</p>
        </div>
      </div>
    </div>
  );
}

export default MovieResult;
