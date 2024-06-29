import React from 'react';
import CarouselComponent from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Robotics Society</h1>
      <CarouselComponent />
      <div className="content">
        <p>PEC Robotics society is one of the foremost technical societies. We teach you everything you need to know, to build robots and gadgets, ranging from line followers to gesture-controlled bots, to Quadcopters, and much more.You can build your bot and enter various technical fests held in many IITs and other country's top institutes. These competitions offer lucrative cash prizes. The various competitions enhance your creativity and allow you to think outside of the box. To be a part of robotics all you need is a bit of passion and willingness to learn. Come to learn and go to serve.</p>
        <h2>How will joining robotics help students?</h2>
        <ul>
          <li>
            <strong>Skills Development:</strong> Robotics teaches essential teamwork skills.
          </li>
          <li>
            <strong>Competitions:</strong> Students will be able to compete in robotics competitions held by our college or any other college and win prizes or scholarships.
          </li>
          <li>
            <strong>Communication Skills:</strong> Students learn how to communicate across different technology platforms and gain experience in creating an effective message for various audiences.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
