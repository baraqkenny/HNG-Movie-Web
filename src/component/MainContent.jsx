import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content-wrapper">
      <div className="main-content-one">
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

        <div className="movie-trailer-btn">
          <i className="bx bxs-caret-right-circle"></i>
          WATCH TRAILER
        </div>
      </div>
      <div className="main-content-two">
        <ul>
          <li>1</li>
          <li>2</li>
          <h3 className="active-list">-3</h3>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent
