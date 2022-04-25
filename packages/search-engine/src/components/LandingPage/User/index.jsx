import React from 'react';
<<<<<<< HEAD
import './User.css';

const User = ({ classUser = 'users_container' }) => {
  if (classUser === 'landing') {
    classUser = classUser + ' users_container';
  }

=======
import Image from 'next/image';

import userImage from '../assets/iconUser.png';
import './User.css';

const User = ({ classUser }) => {
  if (classUser !== 'landing') {
    classUser = 'users_container';
  } else {
    classUser = classUser + ' users_container';
  }
>>>>>>> Fixed rebase conflicts
  return (
    <div className={classUser}>
      <div className="link host">
        <a href="/">Hazte anfitrión</a>
      </div>

<<<<<<< HEAD
      <div className="user"></div>
=======
      <div className="user">
        <Image src={userImage} />
      </div>
>>>>>>> Fixed rebase conflicts
    </div>
  );
};

export default User;
