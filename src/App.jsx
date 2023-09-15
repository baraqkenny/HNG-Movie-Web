import React from 'react';
import HomePage from './component/HomePage';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import MovieDetails from './component/movie-details/MovieDetails';

function App() {

  return (
    <div className="movie-container">
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
   
      </Routes>
    </div>
  );
}

export default App
