import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CarouselGallery.css';
import galeria1 from '../assets/galeria1.jpg'
import galeria2 from '../assets/galeria2.jpg'
import galeria3 from '../assets/galeria3.jpg'
import galeria4 from '../assets/galeria4.jpg'
import galeria5 from '../assets/galeria5.jpg'
import galeria6 from '../assets/galeria6.jpg'

function GalleryCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {galeria1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria2}
          alt="Second slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria4}
          alt="Quarter slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria6}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default GalleryCarousel;
