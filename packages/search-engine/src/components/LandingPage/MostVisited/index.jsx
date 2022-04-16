import React from 'react';
import './MostVisited.css';
import VisitedCards from '../VisitedCards';

const MostVisited = () => {
  return (
    <section className="most-visited-container">
      <div className="most-visited-title">
        <h2>Lugares más visitados</h2>
      </div>
      <div className="cards-section">
        <VisitedCards />
      </div>
    </section>
  );
};

export default MostVisited;
