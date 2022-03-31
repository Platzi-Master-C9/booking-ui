import React from 'react';

import '../assets/styles/DropdownMenu.css';

export const DropdownMenu = () => (
  <div className="manage__container">
    <ul className="manage__container--list">
      <li className="list__item">
        <a href="/" className="list__item--link">
          <div className="list__item--option">Editar</div>
        </a>
      </li>
      <li className="list__item">
        <a href="/" className="list__item--link">
          <div className="list__item--option">Validar</div>
        </a>
      </li>
      <li className="list__item">
        <a href="/" className="list__item--link">
          <div className="list__item--option">Banear</div>
        </a>
      </li>
      <li className="list__item">
        <a href="/" className="list__item--link">
          <div className="list__item--option">Eliminar</div>
        </a>
      </li>
      <li className="list__item">
        <a href="/" className="list__item--link">
          <div className="list__item--option">Ver más</div>
        </a>
      </li>
    </ul>
  </div>
);
