import { useEffect, useState} from 'react';
import './HomePage.css';
import Nav from './Nav';
import requests from "./api/requests";
import Movies from './Movies';

function HomePage() {
   const [movie, setMovie] = useState([]);
   const [homepageLoader, setHomepageLoader] = useState(true);

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
         setHomepageLoader(false);
       } catch (error) {
         error.message('Failed to fetch');
       }
     };

     fetchRandomMovie();
   }, []);
  

  return (
    <>
      {homepageLoader ? (
        <div className="homepage-loader"></div>
      ) : (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${
              BASE_URL + movie?.backdrop_path
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="homepage-container"
        >
          <Nav />
          <div className="homepage-movie-content">
            <h1>{movie.title}</h1>
            <p className="homepage-movie-title">{movie.overview}</p>

            {/* <button className="movie-trailer-btn">
              <span><i className="bx bxs-caret-right-circle"></i></span>
              WATCH TRAILER
            </button> */}
          </div>
          <div className="fade-bottom"></div>
        </div>
      )}
 
      <Movies title="Netflix Originals"fetchUrl={requests.fetchNetflixOriginals}/>
      <Movies title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Movies title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Movies title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Movies title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Movies title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
    </>
  );
}

export default HomePage
