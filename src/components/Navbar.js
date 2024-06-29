import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          Robotics Society
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">Resources</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
