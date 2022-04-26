import React from 'react';
// import { Card } from '../Card';
import './styles/ListResults.css';
import './styles/loader.css';

function ListResults({ places, statePlaces }) {
  return <React.Fragment>
    <section className='list__results'>
      { statePlaces.loading &&
        <div className="loader__conatiner">
          <span className="loader"></span>
        </div>
      }
      { (!statePlaces.loading && statePlaces.error) &&
        <h1>An error has occurred: <span>{statePlaces.error}</span></h1>
      }
      { (!statePlaces.loading && !places.length) &&
        <h1>Places not found</h1>
      }
      { places.map(card => {
        return <div className="results__card" key={card.uuid}> {card.city} </div>
      })}
    </section>
  </React.Fragment>
}

export { ListResults };
