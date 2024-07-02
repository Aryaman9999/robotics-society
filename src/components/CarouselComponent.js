import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import client from '../contentfulClient';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const CarouselComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const query = `
        {
          carouselImageCollection {
            items {
              image {
                url
              }
              caption
            }
          }
        }
      `;
      try {
        const response = await client.request(query);
        setImages(response.carouselImageCollection.items);
      } catch (error) {
        console.error('Error fetching carousel images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      interval={5000} // Change interval as needed (in milliseconds)
    >
      {images.map((item, index) => (
        <div key={index}>
          <img src={item.image.url} alt={`Slide ${index + 1}`} />
          {item.caption && <p className="legend">{item.caption}</p>}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
