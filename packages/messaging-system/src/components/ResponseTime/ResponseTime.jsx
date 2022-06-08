// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import styles from './ResponseTime.module.scss';

function ResponseTime({ username }) {
  return (
    <p className={styles.frameTimeline}>
      <strong>
        {username}
      </strong>
      {' '}
      · Tiempo de respuesta: en menos de una hora
    </p>
  );
}

ResponseTime.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ResponseTime;
