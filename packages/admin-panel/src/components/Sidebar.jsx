import React, { useState } from 'react';
import '../assets/styles/Sidebar.scss';
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import { SidebarData } from './SidebarData.js';
import styled from 'styled-components';

const SidebarNav = styled.nav`
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="Header">
        <div className="row" id="Menu-hamburger">
          <div id="Sidebar-list-icon">
            <MenuIcon onClick={showSidebar} />
          </div>
        </div>
      </div>
      <SidebarNav className="Sidebar" sidebar={sidebar}>
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="Sidebar-list-icon">{val.icon}</div>
                <div id="Sidebar-list-title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </SidebarNav>
    </>
  );
};
