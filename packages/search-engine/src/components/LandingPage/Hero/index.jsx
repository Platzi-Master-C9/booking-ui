import React from 'react';

import Header from '../../Header';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <Header classPage="landing" />
        <div className="hero--text-container">
          <h1>
            Encuentra los mejores <br />
            lugares para visitar
          </h1>
          <br />
          <p>Este es un texto cualquiera haha</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
