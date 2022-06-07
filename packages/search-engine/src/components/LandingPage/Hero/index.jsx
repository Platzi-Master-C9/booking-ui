import React from 'react';

import Header from '../../Header';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <Header classPage="landing" />
        <div className="hero--text-container">
          <h1>Find the best places to visit</h1>
          <p>Enjoy an incredible adventure</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
