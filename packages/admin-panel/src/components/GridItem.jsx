import React from "react";

import styles from "../assets/styles/GridItem.module.scss";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  color: #1572a1;
  font-weight: bold;
  border: none;
  background-color: transparent;
  font-size: 1em;
`;

export const GridItem = ({ user, handleActive }) => {
  return (
    <li key={user.id} className={styles.list__item}>
      <div className={styles.textCenterName}>{user.fullName}</div>
      <div>{user.userType === 1 ? "GUEST" : "HOST"}</div>
      <div>{user.status}</div>
      <div>{user.validated === true ? "VALIDATED" : "REQUIRED"}</div>
      <div>{user.dateOfRegister}</div>
      <StyledButton onClick={handleActive}>Manage</StyledButton>
    </li>
  );
};
