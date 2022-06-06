import React, { useState } from 'react';
import Link from 'next/link';
import ModalLogin from '../ModalLogin';
import './User.css';

const User = ({ classUser = 'users_container' }) => {
  if (classUser === 'landing') {
    classUser = classUser + ' users_container';
  }

  const [visible, setVisible] = useState(null);
  const [modal, setModal] = useState(null);

  const toggleVisibility = () => !visible ? setVisible('show') : setVisible(null);
  const toggleModal = () => !modal ? setModal('show') : setModal(null);

  return (
    <div className={classUser}>
      <div className="link host">
        <Link href="/host">
          <a>Become a Host</a>
        </Link>
      </div>

      <div className="user" onClick={toggleVisibility}>
        <div className={`user_menu ${visible}`}>
          <span onClick={toggleModal}>Sing up</span>
          <div className='hr'></div>
          <span onClick={toggleModal}>Log in</span>
        </div>
      </div>

      <ModalLogin modal={modal} toggleModal={toggleModal}></ModalLogin>
    </div>
  );
};

export default User;
