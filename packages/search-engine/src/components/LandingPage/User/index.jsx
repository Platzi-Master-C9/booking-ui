import React from 'react';
import Image from 'next/image';

import userImage from '../assets/iconUser.png';
import './User.css';

const User = () => {
  return (
    <div className="user--experience-container">
      <p>Hazte anfitrion</p>
      <div className="user--img-container">
        <Image src={userImage} />
      </div>
    </div>
  );
};

export default User;
