import React from 'react';

import '../assets/styles/Header.scss';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = ({ showSidebar }) => (
  <div className="Header">
    <div className="row" id="Menu-hamburger">
      <div id="Sidebar-list-icon">
        <MenuIcon onClick={showSidebar} />
      </div>
    </div>
    <div className="Circulo" id="BS">
      <p>Circulo</p>
    </div>
    <div className="Circulo" id="Perfil">
      <p>Perfil</p>
    </div>
  </div>
);
