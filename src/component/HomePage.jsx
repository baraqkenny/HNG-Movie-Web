import React from 'react';
import './HomePage.css';
import Nav from './Nav';
import MainContent from './MainContent';
import MovieResult from './MovieResult';

function HomePage() {
  return (
    <div className="homepage-container">
      <Nav />
      <MainContent />
      <MovieResult />
    </div>
  );
}

export default HomePage
