import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content-wrapper">
      <h1>
        John Wick 3: <br /> Parabellum
      </h1>
      <div className="homepage-movie-rating">
        <div className="homepage-imdb-wrap">
          <img src="./imdb-logo.png" alt="" />
          <p>86.0/100</p>
        </div>
        <div className="homepage-fruit-wrap">
          <img src="./PngItem_1381056 1.png" alt="" />
          <p>97%</p>
        </div>
      </div>

      <p className="homepage-movie-title">
        John Wick is on the run after killing a member
        <br />
        of the international assasins guild, and with <br />
        a $14 million price tag on his head, he is the <br />
        target of hit men and women everywhere.
      </p>

      <button className="movie-trailer-btn">
        <box-icon
          className="play-icon"
          type="solid"
          name="caret-right-circle"
        ></box-icon>
        WATCH TRAILER
      </button>
    </div>
  );
}

export default MainContent
