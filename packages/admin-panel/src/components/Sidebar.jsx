import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import "../assets/styles/Sidebar.scss";
import { SidebarData } from "./SidebarData.js";
import MenuIcon from "@mui/icons-material/Menu";


const SidebarNav = styled.nav`
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;

  @media screen and (max-width: 940px) {
    & {
      left: ${({ sidebar }) => (sidebar ? "-100%" : "0")};
    }
  }

  @media screen and (max-width: 1110px) {
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

  @media screen and (max-width: 1110px) {
    & {
      display: none;
    }
  }
`;

export const Sidebar = ({ sidebar }) => {
  const router = useRouter();

  return (
    <>
      <SidebarNav className="Sidebar" sidebar={sidebar}>
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <Link key={key} href={val.link}>
                <li
                  className="row"
                  id={router.pathname === val.link ? "active" : ""}
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
