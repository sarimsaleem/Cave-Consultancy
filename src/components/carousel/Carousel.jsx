import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CrouselVideo from '../../assets/banner.mp4';
import './carousel.css';
import { Button } from 'react-bootstrap';

const Carousel = () => {
  return (
    <div className="banner-container">
      <video className="carousel-video" src={CrouselVideo} autoPlay loop muted />
      <div className="carousel-overlay">
        <h1 className="carousel-title">Welcome to Cave Consulting</h1>
        <p className="carousel-subtitle">Insights, strategies, and updates to help your business thrive.</p>
        <Button className="carousel-button">Learn More</Button>
      </div>
    </div>
  );
};  

export default Carousel;
