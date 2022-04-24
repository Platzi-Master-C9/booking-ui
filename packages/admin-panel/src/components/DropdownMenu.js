import React from "react";

import "../assets/styles/DropdownMenu.scss";
import styled from "styled-components";

const StyledDropdown = styled.div`
  visibility: ${({ isActive }) => (isActive ? " visible" : "hidden")}
  font-family: sans-serif;
  text-align: center;
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 154px;
  height: 279px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  overflow: hidden;
`;

export const DropdownMenu = ({ isActive }) => {
  return (
    <StyledDropdown isActive={isActive}>
      <ul className="manage__container--list">
        <li className="list__item">
          <a href="/" className="list__item--link">
            <div className="list__item--option">Edit</div>
          </a>
        </li>
        <li className="list__item">
          <a href="/" className="list__item--link">
            <div className="list__item--option">Validate</div>
          </a>
        </li>
        <li className="list__item">
          <a href="/" className="list__item--link">
            <div className="list__item--option">Ban</div>
          </a>
        </li>
        <li className="list__item">
          <a href="/" className="list__item--link">
            <div className="list__item--option">Delete</div>
          </a>
        </li>
        <li className="list__item">
          <a href="/" className="list__item--link">
            <div className="list__item--option">See more</div>
          </a>
        </li>
      </ul>
    </StyledDropdown>
  );
};
