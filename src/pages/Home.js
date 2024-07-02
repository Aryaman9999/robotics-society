import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <CarouselComponent />
      <div className="home-content">
        <h2>How will joining robotics help students?</h2>
        <ul>
          <li>Robotics teaches essential teamwork skills.</li>
          <li>Students will be able to compete in robotics competitions held by our college or any other college and win prizes or scholarships.</li>
          <li>Students learn how to communicate across different technology platforms and gain experience in creating an effective message for various audiences.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
