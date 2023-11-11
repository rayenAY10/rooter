import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Routes>
    </Router>
  );
}

const movies = [
  {
    id: 1,
    title: "Movie 1",
    description: "This is the description for Movie 1.",
    trailerLink: "https://www.youtube.com/embed/your-trailer-embed-link1",
  },
  {
    id: 2,
    title: "Movie 2",
    description: "This is the description for Movie 2.",
    trailerLink: "https://www.youtube.com/embed/your-trailer-embed-link2",
  },
  // Add more movies with descriptions and trailer links
];


export default App;
