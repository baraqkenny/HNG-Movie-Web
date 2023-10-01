import { useState, useEffect } from "react";
import "./Trending.css";

function NowPlaying() {
  const [trendings, setTrendings] = useState([]);

  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    // Function to fetch data from the MovieDB API
    const fetchTrending = async () => {
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
          "https://api.themoviedb.org/3/trending/all/day?language=en-US",
          options
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from MovieDB API");
        }

        const data = await response.json();
        console.log(data.results);
        setTrendings(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
      <h1 className="trending">Now Playing</h1>
      <div className="trending-movie-wrapper">
        {trendings.map((trending) => (
          <div className="trending-movie-content" key={trending.id}>
            <img
              className="trending-movie-poster"
              src={BASE_URL + trending.poster_path}
              alt={trending.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NowPlaying;
