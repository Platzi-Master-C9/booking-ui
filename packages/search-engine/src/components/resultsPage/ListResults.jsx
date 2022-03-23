import React from 'react';
<<<<<<< HEAD
import './styles/ListResults.css'
=======
>>>>>>> Layout the search results page #41

export default function Results(props) {
  return <React.Fragment>
    <section className='list__results'>
      { props.data.map((card, index) => {
        return <div className="results__card" key={card.id}> {card.title} </div>
      })}
    </section>
  </React.Fragment>
<<<<<<< HEAD
}
=======
}
>>>>>>> Layout the search results page #41
