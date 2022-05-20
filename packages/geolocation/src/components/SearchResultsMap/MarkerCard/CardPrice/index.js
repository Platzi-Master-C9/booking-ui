import React from 'react';
import styles from './cardPrice.module.css';

function CardPrice({ price }) {
  return (
    <div className={styles.price}>
      <p>${price} MXN</p>
      <p>/ noche</p>
    </div>
  );
}

export { CardPrice };
