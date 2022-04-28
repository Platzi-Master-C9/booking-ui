import React from 'react';
import Image from 'next/image';

import userImage from '../assets/iconUser.png';
import './User.css';

const User = ({ classUser }) => {
  if (classUser !== 'landing') {
    classUser = 'users_container';
  } else {
    classUser = classUser + ' users_container';
  }
  return (
    <div className={classUser}>
      <div className="link host">
        <a href="/">Hazte anfitrión</a>
      </div>

      <div className="user">
        <Image src={userImage} />
      </div>
    </div>
  );
};

export default User;
