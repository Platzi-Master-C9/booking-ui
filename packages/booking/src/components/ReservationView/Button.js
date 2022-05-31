
import React from 'react';
// Styles
import '../../assets/styles/Button.scss';

const Button = ({ children, type }) => {
  return (
    <>
      {type === 'add' ? (
        <button className="button button__add">
          {children}
        </button>
      ) : (
        <button className="button button__confirm">
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
