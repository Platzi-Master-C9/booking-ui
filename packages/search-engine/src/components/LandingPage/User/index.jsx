import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import './User.css';

const optionsNoAuthenticated = ['Regístrate', 'Iniciar sesión'];
const optionsAuthenticated = [
  'Mensajes',
  'Notificaciones',
  'Listas de favoritos',
  'Cuenta',
  'Cerrar sesión',
];

const User = ({ classUser = 'users_container' }) => {
  const { logout, isAuthenticated, loginWithPopup, user } = useAuth0();

  const [isOpen, setIsOpen] = useState();
  const [, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    switch (value) {
      case 'Cerrar sesión':
        logout();
        break;
      case 'Iniciar sesión':
        loginWithPopup();
        break;
      case 'Regístrate':
        loginWithPopup({
          screen_hint: 'signup',
        });
    }
    setIsOpen(false);
  };

  if (classUser === 'landing') {
    classUser = classUser + ' users_container';
  }

  return (
    <div className={classUser}>
      <div className="link host">
        <a href="/">Hazte anfitrión</a>
      </div>

      <button
        className={`user ${isAuthenticated && 'userAuthenticated'}`}
        onClick={toggling}
      >
        {isAuthenticated && <img src={user?.picture} alt={user?.name} />}
      </button>

      {isOpen && (
        <div className="dropdown_list_container">
          <ul className="dropdown_list">
            {isAuthenticated
              ? optionsAuthenticated.map((option) => (
                  <li
                    className="list_item"
                    key={Math.random()}
                    onClick={onOptionClicked(option)}
                  >
                    {option}
                  </li>
                ))
              : optionsNoAuthenticated.map((option) => (
                  <li
                    className="list_item"
                    key={Math.random()}
                    onClick={onOptionClicked(option)}
                  >
                    {option}
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default User;
