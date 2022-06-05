import React from "react";

import "../assets/styles/Header.scss";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = ({ showSidebar }) => (
  <div className="Header-conteiner">
    <div className="Header">
      <div className="row" id="Menu-hamburger">
        <div id="Sidebar-list-icon">
          <MenuIcon onClick={showSidebar} />
        </div>
        <div className="Company-container">
          <h1 className="Company-name"> BS</h1>
        </div>
      </div>
      <div className="admin">
        <p className="Administrador"> Administrador</p>
        <img
          src="https://i.ibb.co/TRq94N6/Foto-de-perfil-1.png"
          alt="Foto de perfil"
          border="0"
          className="Admin-photo"
        />
      </div>
    </div>
  </div>
);
