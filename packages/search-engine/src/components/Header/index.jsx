import React from 'react';
import './Header.css';

export default function Header() {
	return <header className="header__container">
    <div className='logo'>
      <a href='/'>BS</a>
    </div>

    <div className='search__container'></div>

    <div className='users_container'>
      <div className='link host'>
        <a href='/'>Hazte anfitrión</a>
      </div>

      <div className='user'></div>
    </div>

    <div className='filter__container'>
      <div className='filter'>
        <p>Precio <span>v</span></p>
      </div>

      <div className='filter'>
        <p>Tipo de alojamiento <span>v</span></p>
      </div>

      <div className='filter'>
        <p>Clasificación <span>v</span></p>
      </div>
    </div>
  </header>
}
