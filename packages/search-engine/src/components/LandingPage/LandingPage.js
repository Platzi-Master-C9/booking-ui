import React from 'react';
import Hero from './Hero';
import MostVisited from './MostVisited';
import Footer from '../Footer';

export const LandingPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <MostVisited />
      <Footer />
    </React.Fragment>
  );
};
