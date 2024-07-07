// src/pages/SocietySelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SocietySelection.css';

const SocietySelectionPage = () => {
  const navigate = useNavigate();

  const handleSocietySelection = (society) => {
    navigate(`/${society}`);
  };

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Technical Societies</h1>
        <p className="lead">Select a society to explore its activities, events, and resources.</p>
      </header>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h2 className="card-title">Robotics Society</h2>
              <p className="card-text">Explore the exciting world of robotics, join events, and access valuable resources.</p>
              <button onClick={() => handleSocietySelection('robotics')} className="btn btn-primary">
                Go to Robotics Society
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h2 className="card-title">SME</h2>
              <p className="card-text">Dive into the field of SME, participate in events, and access useful resources.</p>
              <button onClick={() => handleSocietySelection('sme')} className="btn btn-primary">
                Go to SME Society
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietySelectionPage;
