import React from 'react';
import CardComponent from '../Card';
import './styles/ListResults.css';
import './styles/loader.css';

function ListResults({ places, statePlaces }) {
  console.log(statePlaces, 'statePlaces');
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
      {places.map((place) => {
        return (
          <CardComponent 
            key={place.id}
            subtitle={place.title}
            title={place.type}
            description={place.perks}
            rating={place.rating}
            price={place.price}
            reviews={place.reviews}
            image={place.images[0]}
          />
        )
      })};
    </section>
  </React.Fragment>
}

export { ListResults };
