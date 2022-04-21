import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../assets/styles/Sidebar.scss';
import { SidebarData } from './SidebarData.js';
import MenuIcon from '@mui/icons-material/Menu';

const SidebarNav = styled.nav`
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

  @media screen and (max-width: 412px) {
    & {
      left: ${({ sidebar }) => (sidebar ? '-100%' : '0')};
    }
  }

  @media screen and (max-width: 1024px) {
    & {
      width: 65px;
    }
  }

  &:hover {
    width: 230px;
  }
  &:hover #Sidebar-list-title {
    display: block;
  }
`;

const TitleSidebar = styled.div`
  display: block;

  @media screen and (max-width: 1024px) {
    & {
      display: none;
    }
  }
`;

<<<<<<< HEAD
export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const router = useRouter();

  return (
    <>
      <div className="Header">
        <div className="row" id="Menu-hamburger">
          <div id="Sidebar-list-icon">
            <MenuIcon onClick={showSidebar} />
          </div>
        </div>
        {/* <div className="Circulo" id="BS">
          <p>Circulo</p>
        </div>
        <div className="Circulo" id="Perfil">
          <p>Perfil</p>
        </div> */}
      </div>
      <SidebarNav className="Sidebar" sidebar={sidebar}>
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <Link href={val.link}>
                <li
                  key={key}
                  className="row"
                  id={router.pathname === val.link ? 'active' : ''}
                >
                  <div id="Sidebar-list-icon">{val.icon}</div>
                  <TitleSidebar id="Sidebar-list-title" className="title">
                    {val.title}
                  </TitleSidebar>
                </li>
              </Link>
            );
          })}
        </ul>
      </SidebarNav>
    </>
  );
};
=======
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
>>>>>>> Reorganized the layout and integrated the sidebar menu
