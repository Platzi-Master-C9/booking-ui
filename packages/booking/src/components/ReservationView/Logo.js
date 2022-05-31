import React from 'react';
// Styles
import '../../assets/styles/Logo.scss';

const Logo = ({type}) => {
  return (
    <div className={`logo logo--${type}`}>
      <p className={`logo__name logo__name--${type}`}>BS</p>
    </div>
  );
};

export default Logo;
