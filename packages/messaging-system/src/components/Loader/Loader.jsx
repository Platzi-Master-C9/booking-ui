// External dependencies
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import classes from './Loader.module.scss';

function Loader({
  size,
  color,
}) {
  const divStyles = useMemo(() => ({
    width: `${size}px`,
    height: `${size}px`,
    borderWidth: `${size * 0.2}px`,
    borderColor: `${color} transparent transparent transparent`,
  }), [size, color]);

  return (
    <div className={classes.loader}>
      <div style={divStyles} />
      <div style={divStyles} />
      <div style={divStyles} />
      <div style={divStyles} />
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: 20,
  color: '#ffffff',
};

export default Loader;
