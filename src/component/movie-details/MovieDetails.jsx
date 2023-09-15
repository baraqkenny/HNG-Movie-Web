import { useState, useEffect } from 'react';
import './MovieDetails.css';
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

// import logo from "...movie-details/assets/tv.png"

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMovieTrailers, setShowMovieTrailers] = useState([])
  const { id } = useParams();


    const opts = {
      height: "449",
      width: "1100",
      // borderRadius: "13%",
    };


useEffect(() => {
  async function fetchMovieDetails() {
    try {
      const API_KEY = "38fd0af9a364e45ff656fb0cb0a08c80";
      // Fetch movie details by ID
      const response = await fetch(
        `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
        //https://api.themoviedb.org/3/movie/${id}
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGZkMGFmOWEzNjRlNDVmZjY1NmZiMGNiMGEwOGM4MCIsInN1YiI6IjYzMjg4MDgxMGMxMjU1MDA3ZDI5ODE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JqwWU2ubIxC4jf-HE3r_zC5KQcUzVlFDe17Et6rXmfg",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }

      const data = await response.json();
      console.log( data )
      setShowMovieTrailers(data.videos.results.slice(0, 1))
     console.log(data.videos.results)
      setMovieDetails(data);
  
      setLoading(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  fetchMovieDetails();
}, [id]);
  


  return (
    <div className="movie-details-container">
      <div className="side-nav-container">
        <div className="side-nav-logo">
          <img src="../tv.png" alt="website-logo" />
          <h2>MovieBox</h2>
        </div>

        <div className="side-nav-list">
          <ul>
            <li>Home</li>
            <li className="active">Movies</li>
            <li>TV Series</li>
            <li>Upcoming</li>
          </ul>

          <div className="play-movies-wrapper">
            <div className="play-movies-content">
              <h4>
                Play movie quizes
                <br /> and earn
                <br /> free tickets
              </h4>
              <p>
                50k people are playing
                <br /> now
              </p>
              <button>start playing</button>
            </div>
          </div>
          <h4 className="log-out">Log out</h4>
        </div>
      </div>

      <div className="movie-details-wrapper">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          showMovieTrailers.map((movieTrailer) => (
            <div key={movieTrailer.id}>
              <YouTube videoId={movieTrailer.key} opts={opts} />
              <div className="movie-details-content">
                <div className="movie-overview">
                  <h4>
                    {movieDetails.title} <span>.</span>{" "}
                    {movieDetails.release_date} <span>.</span> PG-13
                  </h4>

                  <p>{movieDetails.overview}</p>
                </div>
                <div className="movie-details-content-two">
                  <h4><span className='popular'><box-icon name="star"
                      ></box-icon>
                    </span>
                    8.6 | 350k
                  </h4>
                  <p className="show-times">
                    <span>
                      <img src="../Two Tickets.png" alt="" />
                    </span>
                    See Showtimes
                  </p>
                  <p className="watch-options">
                    <span>
                     
                    </span>
                    More watch options
                  </p>
                  <img className='image' src="../Rectangle 37.png" alt="" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MovieDetails
