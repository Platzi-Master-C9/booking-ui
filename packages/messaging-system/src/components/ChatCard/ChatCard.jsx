// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import styles from './ChatCard.module.scss';

function ChatCard({
  username,
  lastMessage,
  profilePicture,
}) {
  return (
    <section className={styles.container}>
      <div className={styles.profile}>
        <figure>
          <img
            src={profilePicture}
            alt="Profile"
          />
        </figure>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.authorContainer}>
          <h4 className={styles.authorName}>
            {username}
          </h4>
        </div>

        <p className={styles.lastMessage}>
          {lastMessage}
        </p>
      </div>
    </section>
  );
}

ChatCard.propTypes = {
  username: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default ChatCard;
