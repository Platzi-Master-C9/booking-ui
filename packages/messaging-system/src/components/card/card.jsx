// External dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Internal dependencies
import styles from './card.module.scss';

function Card({
  username,
  lastMessage,
  profilePicture,
}) {
  return (
    <section className={styles.container}>
      <div className={styles.chatCard}>
        <figure>
          <img
            src={profilePicture}
            alt="Profile"
          />
        </figure>
        <ul className={styles.info}>
          <li className={styles.infoUsername}>{username}</li>
          <li className={styles.infoMessage}>
            {lastMessage}
          </li>
        </ul>
      </div>
    </section>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default Card;
