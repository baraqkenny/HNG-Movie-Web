import React from 'react';
import './MovieDetails.css';
// import logo from "...movie-details/assets/tv.png"

function MovieDetails() {
  return (
    <div className='movie-details-container'>
      <div className="side-nav-container">
        <div className='side-nav-logo'>
        <img src="./" alt="logo"/>
        <h2>MovieBox</h2>
      </div>

      <div className='side-nav-list'>
      <ul>
        <li>Home</li>
        <li className='active'>Movies</li>
        <li>TV Series</li>
        <li>Upcoming</li>
      </ul>

      <div className='play-movies-wrapper'>
        <div className='play-movies-content'>
        <h4>Play movie quizes<br /> and earn<br/> free tickets</h4>
        <p>50k people are playing<br/> now</p>
        <button>start playing</button>
      </div>
      </div>
        <h4 className='log-out'>Log out</h4>
      </div>
    </div>

      <div className="movie-details-wrapper">
        people
      </div>
    </div>
  )
}

export default MovieDetails
