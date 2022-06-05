// External dependencies
import React from 'react';

// Internal dependencies
import styles from './SideCard.module.scss';

function SideCard() {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_info}>
        <img className={styles.card_image} src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1680&q=80" />
        <h2 className={styles.card_title}>New Loft near Parqu...</h2>
        <p className={`${styles.card_cta} ${styles.title}`}>¿Quieres reservarlo?</p>
        <p className={`${styles.card_cta} ${styles.text}`}>Laura permite que los huéspedes puedan hacer una reservación inmediata.</p>
        <input className={styles.card_button} type="button" name="btn" value="Reservar" />
      </div>
    </div>
  );
}

export default SideCard;
