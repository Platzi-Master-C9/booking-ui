import React from 'react';
// Styles
import '../../assets/styles/EditButton.scss';

const EditButton = ({ children }) => {
  return <button className='editButton'>{children}</button>;
};

export default EditButton;
