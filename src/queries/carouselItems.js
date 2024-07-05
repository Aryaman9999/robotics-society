// src/queries/carouselItems.js
import { gql } from '@apollo/client';

export const GET_CAROUSEL_ITEMS = gql`
  query GetCarouselItems {
    carouselImageCollection {
      items {
        imageCollection {
          items {
            url
          }
        }
        description
      }
    }
  }
`;
