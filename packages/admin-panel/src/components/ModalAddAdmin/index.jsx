import React, { useState } from "react";
import "./style/Input.css";
import Card from "./Card";
import Container from "./Container";
import UserForm from "./UserForm";
import TitleCard from "./TitleCard";

const ModalAddAdmin = ({ children, openModalAddAdmin }) => {
  return (
    <>
      <Container>
        <Card>
          <TitleCard openModalAddAdmin={openModalAddAdmin} />
          <div style={{ padding: 20 }}>
            <UserForm openModalAddAdmin={openModalAddAdmin} />
          </div>
        </Card>
      </Container>
      <div>{children}</div>
    </>
  );
};

export default ModalAddAdmin;
