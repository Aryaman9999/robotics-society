import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import SocietySelectionPage from './pages/SocietySelection';
import Home from './pages/Home';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Blog from './pages/Blog';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SocietySelectionPage />} />
          <Route path="/:society/*" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

function Main() {
  let { society } = useParams();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home society={society} />} />
        <Route path="events" element={<Events society={society} />} />
        <Route path="resources" element={<Resources society={society} />} />
        <Route path="blogs" element={<Blog society={society} />} />
      </Routes>
    </>
  );
}

export default App;
