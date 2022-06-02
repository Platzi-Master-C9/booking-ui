import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResponseTime.module.scss';

export class ResponseTime extends React.PureComponent {
  render() {
    const { username } = this.props;
    return (
      <div className={styles.frame}>
        <p className={styles.frameTimeline}>
          <strong>
            {username}
          </strong>
          {' '}
          Tiempo de respuesta: en menos de una hora
        </p>
      </div>
    );
  }
}

ResponseTime.propTypes = {
  username: PropTypes.string,
};

ResponseTime.defaultProps = {
  username: 'Laura Restrepo',
};

export default ResponseTime;
