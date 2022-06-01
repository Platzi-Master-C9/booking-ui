// External dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Internal dependencies
import styles from './card.module.scss';

export class Card extends React.PureComponent {
  render() {
    const { username, lastMessage, profilePicture } = this.props;
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
}

Card.propTypes = {
  username: PropTypes.string,
  lastMessage: PropTypes.string,
  profilePicture: PropTypes.string,
};

Card.defaultProps = {
  username: 'Laura Restrepo',
  lastMessage: 'Hola ¿Cómo estás?',
  profilePicture: 'chats/lauren_photo_profile.png',
};

export default Card;
