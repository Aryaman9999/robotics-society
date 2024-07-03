import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      interval={2000} 
    >
      <div>
        <img className="carousel-image" src={process.env.PUBLIC_URL + '/images/Proj_6.jpeg'} alt="Slide 1" />
      </div>
      <div>
        <img className="carousel-image" src={process.env.PUBLIC_URL + '/images/Proj_4.jpeg'} alt="Slide 2" />
      </div>
      <div>
        <img className="carousel-image" src={process.env.PUBLIC_URL + '/images/Proj_5.jpeg'} alt="Slide 3" />
      </div>
      <div>
        <img className="carousel-image" src={process.env.PUBLIC_URL + '/images/Proj_1.jpeg'} alt="Slide 4" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
