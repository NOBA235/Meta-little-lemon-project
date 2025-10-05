import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../assets/restauranfood (1).jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>A family-owned Mediterranean restaurant</p>
            <Link to="/reservations" className="btn">Reserve a Table</Link>
          </div>
          <div className="hero-image">
            <img src={mainImage}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;