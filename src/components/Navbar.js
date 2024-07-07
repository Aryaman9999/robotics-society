import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const { society } = useParams();
  const [expanded, setExpanded] = useState(false);

  const handleToggleCollapse = () => {
    setExpanded(!expanded);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={`/${society}`}>
          {society.toUpperCase()}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleCollapse}
          aria-controls="navbarNav"
          aria-expanded={expanded ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={`/${society}`} activeClassName="active" onClick={handleToggleCollapse}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/${society}/events`} activeClassName="active" onClick={handleToggleCollapse}>
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/${society}/resources`} activeClassName="active" onClick={handleToggleCollapse}>
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/${society}/blogs`} activeClassName="active" onClick={handleToggleCollapse}>
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={handleGoBack}>
                <FontAwesomeIcon icon={faArrowLeft} /> Back
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
