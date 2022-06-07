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
  const isValidated = user.validated === true ? "Sí" : "No"
  const userStatus = user.status === "ACTIVE" ? "Activo" : "Baneado"
  const typeOfUser = user.profile === 1 ? "Huésped" : "Anfitrión"

  return (
    <li key={user.id} className={styles.list__item}>
      <div className={styles.textCenterName}>{user.fullName}</div>
      <div>{typeOfUser}</div>
      <div>{userStatus}</div>
      <div>{isValidated}</div>
      <div>{user.date_of_register}</div>
      <StyledButton onClick={handleActive} isActive={isMenuActive}>
        Manage
      </StyledButton>
      {isMenuActive ? <DropdownMenu isActive={isMenuActive} /> : null}
    </li>
  );
};
