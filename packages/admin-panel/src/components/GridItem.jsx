import React, { useState } from "react";

import { DropdownMenu } from "./DropdownMenu";
import styles from "../assets/styles/GridItem.module.scss";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#449dc9" : " #1572a1")};
  font-weight: bold;
  border: none;
  background-color: transparent;
  font-size: 1em;
`;

export const GridItem = ({ user }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleActive = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <li key={user.id} className={styles.list__item}>
      <div className={styles.textCenterName}>{user.full_name}</div>
      <div>{user.type}</div>
      <div>{user.status}</div>
      <div>{user.validate}</div>
      <div>{user.date_of_register}</div>
      <StyledButton onClick={handleActive} isActive={isMenuActive}>
        Manage
      </StyledButton>
      {isMenuActive ? <DropdownMenu isActive={isMenuActive} /> : null}
    </li>
  );
};
