import React from 'react';
import styles from './markerCard.module.css';
import { CardCarousel } from './CardCarousel';
import { CardRating } from './CardRating';
import { CardTitle } from './CardTitle';
import { CardPrice } from './CardPrice';

function MarkerCard({ place }) {
  return (
    <div className={styles.card}>
      {/* Send place images array */}
      <CardCarousel images={place.images} />

      <div className={styles.cardData}>
        {/* Send place rating and reviews */}
        <CardRating rating={place.rating} reviews={place.reviews} />

        {/* Send place type and title */}
        <CardTitle type={place.type} title={place.title} />

        {/* Send place price */}
        <CardPrice price={place.price} />
      </div>
    </div>
  );
}

export { MarkerCard };
