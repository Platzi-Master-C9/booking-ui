import React from 'react';
import '../../assets/styles/TextInformation.scss';

const TextInformation = ({ children, width }) => {
  return (
    <>
      {width ? (
        <p className="textInformation" style={{ width }}>
          {children}
        </p>
      ) : (
        <p className="textInformation" style={{ width }}>
          {children}
        </p>
      )}
    </>
  );
};

export default TextInformation;
