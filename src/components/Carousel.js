import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'; // Optional: for additional styling

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      interval={2000} // Change interval as needed (in milliseconds)
    >
      <div>
        <img src={process.env.PUBLIC_URL + '/images/Proj_6.jpeg'} alt="Slide 1" />
        
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/Proj_4.jpeg'} alt="Slide 2" />
        
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/Proj_5.jpeg'} alt="Slide 3" />
        
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/Proj_1.jpeg'} alt="Slide 3" />
        
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
