import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
