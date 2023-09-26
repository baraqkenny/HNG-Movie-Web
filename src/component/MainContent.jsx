import { useState, useEffect} from 'react';
import './MainContent.css';

function MainContent() {
   const [movie, setMovie] = useState([]);
   const [loading, setLoading] = useState(true);

   const BASE_URL = "https://image.tmdb.org/t/p/w500";

   useEffect(() => {
     // Function to fetch data from the MovieDB API
     const fetchRandomMovie = async () => {
       try {
         const apiKey = "38fd0af9a364e45ff656fb0cb0a08c80"; // Replace with your MovieDB API key
         const response = await fetch(
           `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
         );

         if (!response.ok) {
           throw new Error("Failed to fetch data from MovieDB API");
         }

         const data = await response.json();

         // Select a random movie from the fetched data
         const randomIndex = Math.floor(Math.random() * data.results.length);
         const randomMovie = data.results[randomIndex];

         setMovie(randomMovie);
         setLoading(false)
         console.log(randomMovie)
       } catch (error) {
         console.error(error);
       }
     };

     fetchRandomMovie();
   }, []);
  

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
          }}
        >
          <h1>{movie.title}</h1>
          <p className="homepage-movie-title">{movie.overview}</p>

          <div className="movie-trailer-btn">
            <i className="bx bxs-caret-right-circle"></i>
            WATCH TRAILER
          </div>
        </div>
      )}
    </>
  );
}

export default MainContent
