import React from 'react';
import './User.css';

const User = ({ classUser = 'users_container' }) => {
  if (classUser === 'landing') {
    classUser = classUser + ' users_container';
  }

  return (
    <div className={classUser}>
      <div className="link host">
        <a href="/">Hazte anfitrión</a>
      </div>

      <div className="user"></div>
    </div>
  );
};

export default User;
