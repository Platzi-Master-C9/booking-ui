import React from 'react';

export default function Results(props) {
  return <React.Fragment>
    <section className='list__results'>
      { props.data.map((card, index) => {
        return <div className="results__card" key={card.id}> {card.title} </div>
      })}
    </section>
  </React.Fragment>
}