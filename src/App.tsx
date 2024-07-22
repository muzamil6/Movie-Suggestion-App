import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Movie from './pages/movie/Movie';
import SearchResults from './pages/searchResult/SearchResults';
function App() {
  return (
   <>
  <Router>
    <Navbar />
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>

  </Router>
   </>
  );
}

export default App;
