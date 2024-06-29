import React, { useState, useEffect } from 'react';
import CarouselComponent from '../components/Carousel';
import axios from 'axios'; // Or use fetch if you prefer

const Home = () => {
  const [data, setData] = useState({ title: '', points: [] });

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to Robotics Society</h1>
      <CarouselComponent />
      <div className="content">
        <h2>{data.title}</h2>
        <ul>
          {data.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
