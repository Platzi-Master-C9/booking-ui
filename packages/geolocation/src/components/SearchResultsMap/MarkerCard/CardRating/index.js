import React from 'react';
import styles from './cardRating.module.css';
import { AiFillStar } from 'react-icons/ai';

function CardRating({ rating, reviews }) {
  return (
    <div className={styles.rating}>
      <AiFillStar className={styles.star} />
      <p>4.98</p>
      <p>(62)</p>
    </div>
  );
}

export { CardRating };
