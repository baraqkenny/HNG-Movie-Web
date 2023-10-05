import React, { useState, useEffect } from "react";
import logo from "../assets/tv.png";
import "./Nav.css";

function Nav() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchList, setSearchList] = useState(false)
 

   const BASE_URL = "https://image.tmdb.org/t/p/w500";


      async function searchMovie(e) {
        e.preventDefault();

        try {
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGZkMGFmOWEzNjRlNDVmZjY1NmZiMGNiMGEwOGM4MCIsInN1YiI6IjYzMjg4MDgxMGMxMjU1MDA3ZDI5ODE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JqwWU2ubIxC4jf-HE3r_zC5KQcUzVlFDe17Et6rXmfg",
            },
          };

          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US&page=1`,
            options
          );
          // const response = await fetch(
          //   `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
          // );
          //  api.themoviedb.org/3/search/movie?query=${searchResults}&api_key=${API_KEY}

          if (!response.ok) {
            throw new Error("Failed to fetch data from MovieDB API");
          }
          const data = await response.json();
          console.log(data.results);
          setSearchResults(data.results);
        } catch (error) {
          console.log(error);
        }
        
      }

    
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSearchList(true);
  };

  return (
    <nav className="nav-container">
      <a href="" className="logo-wrapper">
        <img className="logo-image" src={logo} alt="website-logo" />
        <h3>MovieBox</h3>
      </a>

      <form className="searchbox-wrapper">
        <input
          type="text"
          placeholder="What do you want to watch?"
          onChange={handleSearch}
          value={searchQuery}
        />
        <i className="bx bx-search" onClick={searchMovie}></i>
      </form>
      <ul className={searchList? "search__result__wrapper" : ""}>
        {searchResults &&
          searchResults.map((searchResult) => (
            <React.Fragment key={searchResult.id}>
              <div className="">
                <img
                  className="search__result__image"
                  src={`${BASE_URL}${searchResult.poster_path}`}
                />
                <li className="movie__list">{searchResult.title}</li>
              </div>
            </React.Fragment>
          ))}
      </ul>
      {/* <div className="searchbox-wrapper">
        <input
          type="text"
          placeholder="What do you want to watch?"
          onChange={handleSearch}
          value={}
        />
        <i className="bx bx-search" ></i>
      </div> */}

      <div className="signin-wrapper">
        <p>Sign in</p>
        <img src="./Menu.png" alt="menu" />
      </div>
    </nav>
  );
}

export default Nav;
