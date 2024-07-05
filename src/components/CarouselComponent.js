// src/components/CarouselComponent.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { Carousel } from 'react-bootstrap';
import { GET_CAROUSEL_ITEMS } from '../queries/carouselItems';
import './Carousel.css'; // Import the CSS file

const CarouselComponent = () => {
  const { loading, error, data } = useQuery(GET_CAROUSEL_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching carousel items:', error);
    return <p>Error loading carousel items: {error.message}</p>;
  }

  const carouselItems = data.carouselImageCollection.items;

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        item.imageCollection.items.map((image, idx) => (
          <Carousel.Item key={`${index}-${idx}`}>
            <img
              className="d-block w-100"
              src={image.url}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
