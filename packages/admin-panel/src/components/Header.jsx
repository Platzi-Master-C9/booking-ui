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
      <div className="Company-container">
        <h1 className="Company-name"> BS</h1>
      </div>
      <div className="Company-container">
        <h1 className="Company-name"> BS</h1>
      </div>
    </div>
    <div className="admin">
      <p className="Administrador"> Administrador</p>
      <img
        src="https://s3-alpha-sig.figma.com/img/5854/ba20/3706ed41ce27886ff91cfe814cc60f2a?Expires=1651449600&Signature=Vn83zN3kWRivbZ564x0ADU41aoBsahjUvek9XYQeTsqr8zjBA6rOQDky1bY9~5RjzfXtbGMvCwxlepHmSEimWJmPtdrzHgMSr1DHQJlYIr7SYViNYpKsYZXfp9Ku8QVyGYTKmPER9ugXidgD~317kmfP91WBxhVQcIhrN2~VlvJXwqImilcjPkuVsVV0-gEWuaDc~20NPlEMuZCXSTmcEj1lvNENQ-TVcOCF0kqNQGlk1iiZ5Zx62fOH9llPCARv~qjVxg5Mp-VZMkyvPU2AxuaY0dREjzkWAvzNFlMtvfRgi9hqgJsN9lw7XCdCZmVj911lfCnGlyMMpM9ivrsQ0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        className="Admin-photo"
      />
    </div>
  </div>
);
