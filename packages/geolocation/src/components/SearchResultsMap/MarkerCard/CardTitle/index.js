import React from 'react';
import styles from './cardTitle.module.css';

function CardTitle({ type, title }) {
  return (
    <div className={styles.title}>
      <p>{type}</p>
      <p>{title}</p>
    </div>
  );
}

export { CardTitle };
