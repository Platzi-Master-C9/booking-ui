import React from 'react';
// import { Card } from '../Card';
import './styles/ListResults.css'

function ListResults({ places }) {
  return <React.Fragment>
    <section className='list__results'>
      { places.map(card => {
        return <div className="results__card" key={card.uuid}> {card.city} </div>
      })}
    </section>
  </React.Fragment>
}

export { ListResults };
