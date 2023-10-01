import {useState, useEffect} from 'react';
import './FavoriteMovie.css';

function Favorite() {
      const [favoriteMovie, setFavoriteMovie] = useState([]);

      const BASE_URL = "https://image.tmdb.org/t/p/w500";

      useEffect(() => {
        // Function to fetch data from the MovieDB API
        const fetchFavoriteMovie = async () => {
         
                const options = {
                  method: "GET",
                  headers: {
                    accept: "application/json",
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGZkMGFmOWEzNjRlNDVmZjY1NmZiMGNiMGEwOGM4MCIsInN1YiI6IjYzMjg4MDgxMGMxMjU1MDA3ZDI5ODE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JqwWU2ubIxC4jf-HE3r_zC5KQcUzVlFDe17Et6rXmfg",
                  },
                };
            try{    
                const response = await fetch(
                  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
                  options
                );
                 
            if (!response.ok) {
              throw new Error("Failed to fetch data from MovieDB API");
            }

            const data = await response.json();
            setFavoriteMovie(data.results);
          } catch (error) {
            console.error(error);
          }
          
        };

        fetchFavoriteMovie();
      }, []);


  return (
    <div>
      <h1 className='popular'>Popular</h1>
      <div className="favorite-movie-wrapper">
        {favoriteMovie.map((favorite) => (
          <div className="favorite-movie-content" key={favorite.id}>
            <img
              className="favorite-movie-poster"
              src={BASE_URL + favorite.poster_path}
              alt={favorite.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Favorite
