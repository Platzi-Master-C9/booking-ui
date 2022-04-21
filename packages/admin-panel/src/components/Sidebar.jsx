import React from 'react';

import { SidebarData } from './SidebarData.js';
import '../assets/styles/Sidebar.scss';
import styled from 'styled-components';

const SidebarNav = styled.nav`
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const Sidebar = ({ sidebar }) => (
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
            // id={window.location.pathname === val.link ? 'active' : ''}
          >
            <div id="Sidebar-list-icon">{val.icon}</div>
            <div id="Sidebar-list-title">{val.title}</div>
          </li>
        );
      })}
    </ul>
  </SidebarNav>
);
