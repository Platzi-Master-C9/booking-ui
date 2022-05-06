import React from 'react';
// Styles
import '../../assets/styles/Paragraph.scss';

const Paragraph = ({ children }) => {
  return (
    <p className="paragraph">
      {children}
    </p>
  );
}

export default Paragraph