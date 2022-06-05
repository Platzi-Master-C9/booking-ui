// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import classes from './Message.module.scss';

function Message({
  id,
  avatarUrl,
  name,
  text,
  align,
}) {
  const alignLeft = align !== 'left';

  return (
    <div
      id={`message-${id}`}
      className={classes.container}
      style={{
        flexDirection: alignLeft ? 'row' : 'row-reverse',
      }}
    >

      <div className={classes.avatarContainer}>
        <img
          src={avatarUrl}
          alt="Profile"
          className={classes.avatar}
        />
      </div>

      <div
        className={classes.contentContainer}
        style={{
          marginRight: alignLeft ? '0' : '24px',
          marginLeft: alignLeft ? '24px' : '0',
        }}
      >
        <div className={classes.authorContainer}>
          <h4
            className={classes.authorName}
            style={{
              textAlign: alignLeft ? 'left' : 'right',
            }}
          >
            {name}
          </h4>
        </div>

        <p
          className={classes.content}
          style={{
            textAlign: alignLeft ? 'left' : 'right',
          }}
        >
          { text }
        </p>
      </div>
    </div>
  );
}

Message.propTypes = {
  id: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Message;
