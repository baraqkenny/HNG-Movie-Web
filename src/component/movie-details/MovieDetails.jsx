import { useState, useEffect } from 'react';
import './MovieDetails.css';
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Nav from '../Nav';



function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMovieTrailers, setShowMovieTrailers] = useState([])
  const { id } = useParams();
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

 
    const opts = {
      height: "449",
      width: "900",
      playerVars: {
          origin: 'http://localhost:5173',
        autoplay: 0, 
      },
    };


useEffect(() => {
  async function fetchMovieDetails() {
    try {
      const API_KEY = "38fd0af9a364e45ff656fb0cb0a08c80";
      // Fetch movie details by ID
     const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);


      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }

      const data = await response.json();
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
      <section className="">
        <Nav />
      </section>

      <div className="movie-details-wrapper">
        {loading ? (
          <div className="movie__detail__loading"></div>
        ) : (
          showMovieTrailers.map((movieTrailer) => (
            <div key={movieTrailer?.id}>
              <div className="youtube__video__wrapper">
                <YouTube videoId={movieTrailer?.key} opts={opts} />
              </div>

              <div className="movie-details-content">
                <img
                  className="movie__detail__image"
                  src={`${BASE_URL}${movieDetails?.poster_path}`}
                  alt=""
                />

                <div className="movie-overview">
                  <div className='movie__title__wrapper'>
                    <h1>Silo</h1>
                    <button className="add__to__fav">
                      <i className="bx bx-plus"></i>add to favorite
                    </button>
                  </div>
                  <div className="movie__genre">
                    <button className='genre__one'>Drama</button>
                    <button className='genre__two'>Science Fiction</button>
                    <div>2023</div>
                    <div>50:38</div>
                    <div>8.5</div>
                  </div>
                  

                  <p>{movieDetails?.overview}</p>
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
 